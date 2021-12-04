const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,//.env dosyasında token yazan variablenin değerine tokeninizi yazın
    prefix:"$getServerVar[prefix]"//ayarlamalı prefix 
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

bot.status({
    text: "Tokyo Code",//buraya durum yazısı
    type: "PLAYING",//buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
    status: "dnd",//buraya status kısmı dnd idle online şeklinde yapabilirsiniz
    time: 12
})

bot.variables({
  prefix:".",//her zaman "" den sonra , koyun
  hex:"ffccff",
  linkengel:"false",
  küfürengel:"false",
  raidengel:"false",
  raidsayı:"7",
  spamengel:"false",
  spamsayı:"0",
  spammesaj:""
  })

//link engel

bot.command({
  name:"$alwaysExecute",
  code:`
  $channelSendMessage[$channelID;{description:❌ Link atmaya çalışma <@$authorID>}{color:$getServerVar[hex]}{delete:7s}]
  $onlyIf[$checkContains[$toLowercase[$message];https://;http://;discord.gg/;.gg/;gg/;.com;.xyz;.net;.tk]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[linkengel]==true;]
  `
  })

bot.updateCommand({
  channel:"$channelID",
  code:`
  $channelSendMessage[$channelID;{description:❌ Link atmaya çalışma <@$authorID>}{color:$getServerVar[hex]}{delete:7s}]
  $onlyIf[$checkContains[$toLowercase[$message];https://;http://;discord.gg/;.gg/;gg/;.com;.xyz;.net;.tk]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[linkengel]==true;]
  `
  })

bot.onMessageUpdate()

//küfür engel

bot.command({
  name:"$alwaysExecute",
  code:`
  $channelSendMessage[$channelID;{description:❌ Küfür etmeye çalışma <@$authorID>}{color:$getServerVar[hex]}{delete:7s}]
  $onlyIf[$checkContains[$toLowercase[$message];oç;amk;aq;sg;piç;ananı sikiyim;ananıskm;siktir]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfürengel]==true;]
  `
  })

bot.updateCommand({
  channel:"$channelID",
  code:`
  $channelSendMessage[$channelID;{description:❌ Link atmaya çalışma <@$authorID>}{color:$getServerVar[hex]}{delete:7s}]
  $onlyIf[$checkContains[$toLowercase[$message];oç;amk;aq;sg;piç;ananı sikiyim;ananıskm;siktir]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfürengel]==true;]
  `
  })

//spam engel

bot.command({
  name:"$alwaysExecute",
  code:`
  $setServerVar[spammesaj;$message;$authorID]
  $setServerVar[spamsayı;$sum[$getServerVar[spamsayı;$authorID];1];$authorID]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[spamengel]==true;]
  `
  })

bot.command({
  name:"$alwaysExecute",
  code:`
  $setServerVar[spamsayı;0;$authorID]
  $channelSendMessage[$channelID;{description:❌ Spam atmaya çalışma <@$authorID>}{color:$getServerVar[hex]}{delete:7s}]
  $onlyIf[$getServerVar[spamsayı;$authorID]==5;]
  $onlyIf[$message==$getServerVar[spammesaj;$authorID];]
  $onlyIf[$getServerVar[spamengel]==true;]
  `
  })

//raid engel

bot.command({
  name:"$alwaysExecute",
  code:`
  $onlyIf[$mentionedUsersCount<=$getServerVar[raidsayı];{execute:raidban}]
  $onlyIf[$mentioned[1]!=;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[raidengel]==true;]
  `
  })

bot.awaitedCommand({
  name:"raidban",
  code:`
  $channelSendMessage[$channelID;{description:⚠️ Fazla etiket attığın için banlandın}{color:$getServerVar[hex]}{delete:7s}]
  $ban[$authorID;Tokyo Chat Guard Altyapısı Raid Engel Sistemi!;1]
  `
  })
