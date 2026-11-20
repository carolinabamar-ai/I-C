const express=require('express');const {body,validationResult}=require('express-validator');const {rateLimit}=require('express-rate-limit');const {query}=require('../db');const nodemailer=require('nodemailer');const router=express.Router();const servicios=require('../data/servicios');
const opciones=new Set([...servicios.map(s=>s.slug),'otro']);const activos=new Set(['','eolico','solar','hibrido','subestacion','otro']);
const limiter=rateLimit({windowMs:15*60*1000,limit:5,standardHeaders:'draft-7',legacyHeaders:false,message:'Se alcanzó el límite de solicitudes. Intentá nuevamente en 15 minutos.'});
function mostrar(res,datos={},errores={},status=200){res.status(status).render('pages/contacto',{title:'Contacto',description:'Solicitá asesoramiento técnico.',datos,errores})}
router.get('/',(req,res)=>mostrar(res,{servicio:opciones.has(req.query.servicio)?req.query.servicio:''}));
router.get('/gracias',(req,res)=>res.render('pages/gracias',{title:'Solicitud recibida',description:'Gracias por contactarnos.'}));
router.post('/',limiter,[
 body('nombre').trim().isLength({min:2,max:150}).withMessage('Ingresá tu nombre y apellido.'),
 body('email').trim().isEmail().withMessage('Ingresá un correo válido.').normalizeEmail(),
 body('servicio').isIn([...opciones]).withMessage('Elegí un servicio.'),
 body('mensaje').trim().isLength({min:10,max:5000}).withMessage('Escribí un mensaje de al menos 10 caracteres.'),
 body('privacidad').equals('si').withMessage('Debés aceptar la política de privacidad.'),
 body('empresa').optional({values:'falsy'}).trim().isLength({max:180}),body('cargo').optional({values:'falsy'}).trim().isLength({max:120}),
 body('telefono').optional({values:'falsy'}).trim().isLength({max:80}),body('ubicacion').optional({values:'falsy'}).trim().isLength({max:180}),
 body('tipo_activo').isIn([...activos]).withMessage('Seleccioná un tipo de activo válido.'),
 body('capacidad_mw').optional({values:'falsy'}).isFloat({min:0,max:100000}).withMessage('Ingresá una capacidad válida.')
],async(req,res,next)=>{
 if(req.body.website)return res.redirect(303,'/contacto/gracias');
 const errors=validationResult(req);if(!errors.isEmpty()){const map={};errors.array().forEach(e=>{if(!map[e.path])map[e.path]=e.msg});return mostrar(res,req.body,map,422)}
 const b=req.body;
 try{
 await query('INSERT INTO solicitudes(nombre,empresa,cargo,email,telefono,servicio,tipo_activo,ubicacion,capacidad_mw,mensaje,ip,user_agent) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',[b.nombre,b.empresa||null,b.cargo||null,b.email,b.telefono||null,b.servicio,b.tipo_activo||null,b.ubicacion||null,b.capacidad_mw?Number(b.capacidad_mw):null,b.mensaje,req.ip,(req.get('user-agent')||'').slice(0,500)]);
 if(process.env.SMTP_HOST&&process.env.SMTP_USER&&process.env.SMTP_PASS&&process.env.NOTIFY_EMAIL){try{const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||587),secure:Number(process.env.SMTP_PORT||587)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});await transporter.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to:process.env.NOTIFY_EMAIL,subject:'Nueva solicitud I&C: '+b.servicio,text:`Nombre: ${b.nombre}\nEmail: ${b.email}\nServicio: ${b.servicio}\nMensaje: ${b.mensaje}`})}catch(e){console.error('Aviso SMTP no enviado:',e.message)}}
 res.redirect(303,'/contacto/gracias');
 }catch(e){console.error(e);mostrar(res,b,{general:'No pudimos registrar la solicitud. Intentá nuevamente más tarde.'},503)}
});
module.exports=router;
