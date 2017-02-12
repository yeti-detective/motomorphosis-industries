import React from 'react';

var style = {
    textDecoration: "none",
    color: '#3F5A95'
};

function WhatNext(){
    return(
        <div>
            <p>Was that game too simple? I made it at a panera on my lunch break. For free. You are welcome to pay me to make a better game. <strong><a style={style} href="mailto:yeti.detective@gmail.com">email</a></strong> or <strong><a style={style} href="tel:8166592363">call me</a></strong>. I accept voicemails 24/7.</p>
            <p>If you want to see what I can do with Angular, <strong><a style={style} href="./wedding" target="_blank">click here</a></strong>. To witness my powers with a MongoDB deployment, <strong><a style={style} href="./urlShortner" target="blank">click this one</a></strong>.</p>
            <p>Otherwise, that's all I've got for now. Party's over. You don't have to go home, but you can't stay here.</p>
        </div>
    );
}

export default WhatNext;