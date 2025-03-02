function s(req, res) {
    console.log(req);
    console.log(res);
}

function createServer(s) {
    const req= {req: 'req'}
    const res = {res: 'res'}

    s(req, res)
    
    return ''
}

createServer(s)
