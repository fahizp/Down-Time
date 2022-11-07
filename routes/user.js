var express = require('express');
const { response } = require('../app');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  let user =req.session.user;
  let products=[
    {
      name:"Rorschach",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337244-bzzhzdzljs-portrait.jpg",
      link:"https://youtu.be/1FmqSUwAirA"
      
    },
    {
      name:"Ponniyin Selvan - Part 1",
      description:"Tamil,Malayalam,Telugu",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODUlICAxNDhrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323897-lwrvzxglzr-portrait.jpg"
      ,link:"https://youtu.be/2HbAWSIOY1s"
      
    },
    {
      name:"Vichithram",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341181-qaqeaumdhr-portrait.jpg"
      ,link:"https://youtu.be/Ru5KXsxRIRk"
    },
    {
      name:"Daari",
      description:"Telugu",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-T2N0IDIwMjI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325999-mzuefbtmxy-portrait.jpg"
      ,link:"https://youtu.be/YQFEBNqOz7c"
    },
    {
      name:"Mei Hoom Moosa",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339396-epbhxjmagv-portrait.jpg"
      ,link:"https://youtu.be/btSyPrnlV8g"
    },
    {
      name:"Shubhadinam",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-M2sgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337358-cqlxvdettk-portrait.jpg"
      ,link:"https://youtu.be/RpZ6GnLBVeg"
    },
    {
      name:"Ini Utharam",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA2ODEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339119-jsjtqwzhtn-portrait.jpg"
      ,link:"https://youtu.be/Eder_lgKjGk"
    },
    {
      name:"Doctor G",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjRrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00305720-hbwlavswff-portrait.jpg"
      ,link:"https://youtu.be/XJrRrMCEmp8"
    }, {
      name:"One Piece Film: Red",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA5ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338474-apeqbpnpmh-portrait.jpg"
      ,link:"https://youtu.be/89JWRYEIG-s"
    }, {
      name:"Halloween Ends",
      description:"English",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337775-jfxrxxqnvu-portrait.jpg"
      ,link:"https://youtu.be/s0vtbxLa-N8"
    },
    {
      name:"Last Film Show",
      description:"Gujarati",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MmsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339953-rlvnrrnqqk-portrait.jpg"
      ,link:"https://youtu.be/qUDMzloKBxw"
    },
    {
      name:"Ticket to Paradise",
      description:"English",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODUlICA3NjQgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338333-akjkvsglhc-portrait.jpg"
      ,link:"https://youtu.be/hkP4tVTdsz8"
    },
    {
      name:"Black Adam",
      description:"English",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00117411-cpjhmvqmfe-portrait.jpg"
      ,link:"https://youtu.be/mkomfZHG5q4"
    },
    {
      name:"Monster",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333288-lhykcvraul-portrait.jpg"
      ,link:"https://youtu.be/mnb0C8vs5x8"
    },
    {
      name:"Code Name:Tiranga",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-M2sgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340525-ctqbdmderz-portrait.jpg"
      ,link:"https://youtu.be/Fz59A68eH4E" 
    },
    {
      name:"Top Gun:Maverick",
      description:"English",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-pfhbyfrcyz-portrait.jpg"
      ,link:"https://youtu.be/giXco2jaZ_4" 
    },
    {
      name:"Ulkkanal",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjggbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337595-mqmxxvvaqg-portrait.jpg"
      ,link:"https://youtu.be/1A8JvoGY3MY" 
    },
    {
      name:"Aye Zindagi",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjE5IGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340263-zshvxkakyy-portrait.jpg"
      ,link:"https://youtu.be/892DxAMnqIY" 
    },
    {
      name:"Kahani Rubber Band",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjMzIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340956-xdjpnucvjs-portrait.jpg"
      ,link:"https://youtu.be/yJk3fee0o4Y" 
    },
    {
      name:"PK Rosy",
      description:"Malayalm",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzcgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00342147-hgepuxknzp-portrait.jpg"
      ,link:"https://youtu.be/4aO-xrZW8YI"
    },
    {
      name:"Kantara",
      description:"Kananada",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTklICA3Nmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330541-fknynsghcj-portrait.jpg"
      ,link:"https://youtu.be/8mrVmf239GU"
    },
    {
      name:"Oru pakka Nadan Premam",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MmsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331364-hwptuwlmfg-portrait.jpg"
      ,link:"https://youtu.be/sJCagfPlbAA" 
    },
    {
      name:"Prince",
      description:"Tamil",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIE9jdCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00331045-qwvvucjcfh-portrait.jpg"
      ,link:"https://youtu.be/KHUZsWSwxWM"
    },
    {
      name:"Ginna",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIE9jdCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340727-krczjwhmsl-portrait.jpg"
      ,link:"https://youtu.be/_ZQtidt8Xbg"
    },
    {
      name:"Headd Bush",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIE9jdCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00331115-cunarthvmp-portrait.jpg"
      ,link:"https://youtu.be/ofCQZ3UCMAQ"
    },
    {
      name:"Padavettu",
      description:"Malayalam",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIE9jdCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341828-zdsvrbvdbk-portrait.jpg"
      ,link:"https://youtu.be/1ErBw6lcMSQ" 
    },
    {
      name:"Kathalekhana",
      description:"Hindi",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIE9jdCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341662-belujlawqr-portrait.jpg"
      ,link:"https://youtu.be/VC567fODe7w" 
    },
    {
      name:"Ori Devuda",
      description:"Tamil",
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIE9jdCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340128-rgbmlfjkgp-portrait.jpg"
      ,link:"https://youtu.be/x4-7tqS1h_Q"
    }

  ]
  
  res.render('index', {admin:false,products,user});
});

// login

/* Login - get */
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
  } else {
    res.render('user/login',
     { loginErr: req.session.loginErr });
    req.session.loginErr = false;
  }
})
/* Login - post */
router.post('/login', (req, res) => {
  userHelpers.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true;
      req.session.user = response.user
      res.redirect('/')
    } else {
      req.session.loginErr = true
      res.redirect('/login')
    }
  })
})
/* Logout */
router.get('/logout', (req, res) => {
  req.session.destroy()
  res.clearCookie()
  res.redirect('/login')
})
module.exports = router;
