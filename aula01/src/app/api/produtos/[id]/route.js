
import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const produto = await prisma.produto.findUnique({
        where: {
            id: params.id
        }
    });

    if (!produto) {
        return NextResponse.json({ error: `Produto não encontrado!! ` }, { status: 400 });

    }


    return NextResponse.json(produto);

}

export async function PUT(request, { params }) {


    const data = await request.json();


    const produtoEncontrado = await prisma.produto.findUnique({
        where: {
            id: params.id
        }
    });

    if (!produtoEncontrado) {
        return NextResponse.json({ error: `Produto não encontrado!! ` }, { status: 400 });

    }

    const produto = await prisma.produto.update({

        where: {
            id: params.id
        },

        data: {
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao
        }
    })

    return NextResponse.json(produto, { status: 200 })
}




export async function DELETE(request, { params }) {


    const data = await request.json();


    const produtoEncontrado = await prisma.produto.findUnique({
        where: {
            id: params.id
        }
    });

    if (!produtoEncontrado) {
        return NextResponse.json({ error: `Produto não Encontrado!! ` }, { status: 400 });

    }

    prisma.produto.delete({

        where: {
            id: params.id
        },
    })

    return NextResponse.json({ message: 'Produto Delatado' })
}


