const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

bot.hears('pizza', ctx =>{
    ctx.reply('Quero!')
})

bot.hears(['fígado','chuchu'], ctx =>{
    ctx.reply('Passo!')
})

bot.hears('🐷', ctx =>{
    ctx.reply('Bacon 🤩')
})

bot.hears(/burguer/i, ctx =>{ // a expressão regular /burger/ i ... i faz a função de ignorar o tipo de letra maísuculas ou não 
    ctx.reply('Quero!')
})

bot.hears([/brocolis/i, /salada/i], ctx =>{
    ctx.reply('Passo!')
})

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx =>{
    moment.locale('pt-br')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai em: ${data.format('dddd')}`)
})

bot.startPolling()