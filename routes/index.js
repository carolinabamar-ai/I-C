const express=require('express');const router=express.Router();const equipo=require('../data/equipo');
router.get('/',(req,res)=>res.render('pages/inicio',{title:'Inicio',description:'Consultoría técnica independiente para parques eólicos y solares.'}));
router.get('/nosotros',(req,res)=>res.render('pages/nosotros',{title:'Nosotros',description:'Nuestra experiencia, valores y forma de trabajar.',equipo}));
router.get('/servicios',(req,res)=>res.render('pages/servicios',{title:'Servicios',description:'Servicios de ingeniería eólica, solar y análisis técnico.'}));
router.get('/privacidad',(req,res)=>res.render('pages/privacidad',{title:'Política de privacidad',description:'Tratamiento de datos personales.'}));
router.get('/robots.txt',(req,res)=>res.type('text/plain').send('User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: '+res.locals.site.url+'/sitemap.xml\n'));
router.get('/sitemap.xml',(req,res)=>{res.type('application/xml');res.send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+['/','/nosotros','/servicios','/contacto','/privacidad'].map(p=>'<url><loc>'+res.locals.site.url.replace(/\/$/,'')+p+'</loc></url>').join('')+'</urlset>')});
module.exports=router;
