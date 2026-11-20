require('dotenv').config();
const fs=require('fs');const path=require('path');const {pool}=require('./index');
async function init(){if(!pool){console.warn('DATABASE_URL ausente: no se creó la tabla.');return false;}await pool.query(fs.readFileSync(path.join(__dirname,'schema.sql'),'utf8'));console.log('Base de datos inicializada');return true;}
if(require.main===module){init().then(()=>pool?.end()).catch(e=>{console.error(e);process.exitCode=1;pool?.end()})}
module.exports=init;
