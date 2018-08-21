//Ao seu dispor Mestre 
//Sinto muito, mas eu só falo com meu mestre

const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    if(from.id == 627852128){
        ctx.reply('Ao seu dispor Mestre ')
    }else{
        ctx.reply('Sinto muito, mas eu só falo com meu mestre')
    }
})

bot.startPolling()