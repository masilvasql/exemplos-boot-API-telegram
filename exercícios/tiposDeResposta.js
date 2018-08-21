const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}! 😎`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
        <i>de Várias</i> <code>formas</code> <pre>Possíveis</pre>
        <a href = "http://www.google.com.br">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
        + '_de várias_ `formas` ```Possíveis```'
        +'[google](http://www.google.com.br)')
    await ctx.replyWithPhoto({source: `${__dirname}/32492007_157905525053641_4378513317669371904_n.jpg`})
    await ctx.replyWithPhoto('https://www.facebook.com/photo.php?fbid=110605356450325&set=a.110605423116985.1073741827.100025025833331&type=3', {caption: 'Olha a guitarra'})
    await ctx.replyWithPhoto({url:'https://i.pinimg.com/originals/d6/97/bb/d697bb75a220596ff49f760f198606f5.jpg'},{caption:'reino Unido'})
    await ctx.replyWithLocation(-27.00808, -51.11712)
    // await ctx.replyWithVideo('http://files.cod3r.com/curso-bot/cod3r-end.m4v')
})


bot.startPolling()