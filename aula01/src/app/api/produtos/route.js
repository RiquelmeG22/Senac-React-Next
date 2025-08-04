import prisma from "../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
    const produtos = await prisma.produto.findMany();
    return NextResponse.json(produtos);

}

export async function POST(request) {
    const data = await request.json();

    const produto = await prisma.produto.create({
        data: {
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao
        }
    })

    return NextResponse.json(produto,{status:200})
}



