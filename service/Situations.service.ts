import http from "../environments/environment";

export async function getMeteorology(): Promise<{
    condicao: string,
    min: number,
    max: number,
}> {
    return await http
        .get('meteorology')
        .then(res => {
            return res.data;
        });
}