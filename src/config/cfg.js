const cfg = ()=>{
    return {
        jwt_secret:"flavio",
        jwt_expires:"1d",
        salt:10,
        db:"mongodb+srv://mbafiap:qbQsExKx4hwGFtLl@clustercliente.trczskv.mongodb.net/?retryWrites=true&w=majority"
    }
}
module.exports = cfg();