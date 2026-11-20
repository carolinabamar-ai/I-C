const {Pool}=require('pg');
const pool=process.env.DATABASE_URL ? new Pool({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:false}}) : null;
module.exports={pool,query:(sql,params=[])=>{if(!pool)throw new Error('DATABASE_URL no configurada');return pool.query(sql,params)}};
