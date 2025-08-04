export default  async  function DetailPost({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id: string } = await params;

    return (
        <div>
            <h1>Detalhe do post</h1>
        </div>
    )
}