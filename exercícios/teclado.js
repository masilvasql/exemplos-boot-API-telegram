const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoCarne = Markup.keyboard([
    ['Porco', 'Vaca', 'Carneiro'],
    ['Galinha','Eu como é ovo'],
    ['Peixe', 'Frutos do Mar'],
    ['Eu sou vegetariano']
]).resize().extra()

bot.start(async ctx =>{
    await ctx.reply(`seja bem vindo ${ctx.update.message.from.first_name}`)
    await ctx.reply(`Qual bebida você prefere?`,
    Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})

bot.hears(['Coca','Pepsi'], async ctx =>{
    await ctx.reply(`Nossa, eu também gosto de ${ctx.match}`)
    await ctx.reply(`Qual a sua Carne predileta?`,tecladoCarne)
})

bot.hears('Vaca', async ctx=>{
    ctx.reply('A minha predileta também')
})

bot.hears('Eu sou vegetariano', async ctx=>{
    ctx.reply('Parabéns, mas eu ainda gosto de carne')
})

bot.on('text', async ctx=>{
    ctx.reply('Legal')
})

bot.startPolling()