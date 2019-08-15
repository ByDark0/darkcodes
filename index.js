const express = require('express');
const app = express();
app.use(express.static('site'));
const http = require("http");
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/site.html');
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
client.on("message", async m => {
  /*
  ©️ BlackFighty Tüm Hakları Saklıdır ©️
  */
  
  client.user.setGame("DarkCodes | !js")
  
  
  let args = m.content.split(' ').slice(1);
  let params = args.slice(0).join(' ');
  let mesaj = m.content.split(' ').slice(0)[0];
  let msj = m.content.split(' ').slice(0);
  
  
  let prefix;
  let p = await db.fetch(`prefix_${m.guild.id}`);
  if(p) {
    prefix = p;
  } else {
    prefix = "!";
  }
  let kmt;
  if(mesaj.startsWith(prefix)) kmt = mesaj.slice(prefix.length).toLowerCase();
  
  const embed = (baslik, msj) => {
    const embed = new Discord.RichEmbed()
      .setTitle(`${baslik}`)
      .setDescription(`${msj}`)
      .setColor("#36393F")
      .setFooter(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
      m.channel.send({embed});
  };
  if(mesaj.toLowerCase() === "sa") {
    embed("Aleyküm Selam " + m.author.username, "Hoşgeldin! Sunucuda eğlenceler dilerim!")
  }
  const err = (sss) => {
    embed(`Hata!`, sss)
  }
  const unerr = (sss) => {
    embed(`Başarılı!`, sss)
  }
  const rolver = (rolid) => {
    if(!m.guild.roles.get(rolid)) return err(rolid + " ID'sine ait olan bu sunucuda rol yok!");
    if(m.member.roles.find(r => r.id === rolid)) return err("Zaten " + (m.guild.roles.get(rolid)) + " rolüne sahipsin!")
    m.guild.members.get(m.author.id).addRole(m.guild.roles.get(rolid))
    unerr(m.author + ", " + m.guild.roles.get(rolid) + " rolün verildi!")
  }
  const rolal = (rolid) => {
    if(!m.guild.roles.get(rolid)) return err(rolid + " ID'sine ait olan bu sunucuda rol yok!");
    if(!m.member.roles.find(r => r.id === rolid)) return err("Zaten " + (m.guild.roles.get(rolid)) + " rolüne sahip değilsin!")
    m.guild.members.get(m.author.id).removeRole(m.guild.roles.get(rolid))
    unerr(m.author + ", " + m.guild.roles.get(rolid) + " rolün alındı!")
  }
  /*
  ©️ BlackFighty Tüm Hakları Saklıdır ©️
  */
  
if(kmt === "rastgele") {
  let kucuk = args[0];
  let buyuk = args[1];
  m.channel.send(Math.floor(Math.random() * buyuk + kucuk))
}

  
if(kmt === "konuş") {
if(!params) return err("Neyi konuşammm");
m.delete();
embed(m.author.username, params)
}
  
  if(kmt === "süpür") {
    if(!m.member.hasPermission("MANAGE_MESSAGES")) return err("`Mesajları yönet` yetkin yok!");
    if(!args[0]) return err(prefix + "süpür [1-100]");
    if(args[0] < 1) return err("En az 1 mesaj süpürebilirim!");
    if(args[0] > 100) return err("En fazla 100 mesaj süpürebilirim!");
    if(!((args[0])/2)) return err("Yazdığın " + args[0] + " bir rakam değil!");
    m.channel.bulkDelete(args[0]);
    m.channel.send("**__" + args[0] + " __mesaj süpürüldü!**").then(ms=>{
      setTimeout(function() {
        ms.delete();
      }, 1000)
    })
  }
   if(kmt === "js") {
rolver("611619760244916224")
}
  if(kmt === "kodekle"){
    if(!m.member.hasPermission("MANAGE_MESSAGES")) return err("`Mesajları yönet` yetkin yok!");
    let link = args[0]
    let kutuphane = args[1]
    let paylasan = m.mentions.users.first();
    if(!link) return err("Linki girmelisin")
    if(!kutuphane) return err("Kütüphanesini de giriver")
    if(!paylasan) return err("Paylasan kisiyi etiketle")
  embed("Yeni Kod", "[Koda gitmek için bana tıkla](" + link + ")\nKütüphane: " + kutuphane + "\nKodu paylaşan: " + paylasan)
    }
});
client.login("NjEwODA2NzkxMDAwOTQ4NzM2.XVXCsw.ID0CzLk1hJBjSIiojDCfIqTSt_g")