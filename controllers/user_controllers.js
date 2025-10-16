import shortid from "shortid";
import Url from "../models/Url.js";


export const renderUi=(req,res)=>{
    res.render("index.ejs",{shortUrl:null})
}

export const urlShort= async (req,res)=>{
    const longUrl= req.body.longUrl;
    const shortCode= shortid.generate()
    const shortUrl=`http://localhost:8000/${shortCode}`


    //save to db

    const newUrl= new Url ({shortCode,longUrl})
    await newUrl.save()
    console.log("url short successfully",newUrl);
    res.render("index.ejs",{shortUrl})
    
}


export const getOriginalUrl= async (req,res)=>{
    const shortCode= req.params.shortCode

    const urlRecord= await Url.findOne({shortCode})
    if(urlRecord){
        res.redirect(urlRecord.longUrl)
    }   
    else{
        res.status(400).json({message:"URL not found"})
    }
}