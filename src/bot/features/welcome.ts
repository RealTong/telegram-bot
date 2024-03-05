import { Composer } from "grammy";
import type { Context } from "#root/bot/context.js";
import { logHandle } from "#root/bot/helpers/logging.js";
import { menuFeature } from "./menu.js";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), (ctx) => {
  ctx.reply(`Hello, ${ctx.from?.id}`);
});

feature.command("userid", logHandle("command-start"), (ctx) => {
  // 返回用户 UserID
  ctx.reply(`Your UserID is: ${ctx.from?.id}`);
});

feature.command("help", logHandle("command-help"), (ctx) => {
  ctx.reply("I can't help you.", {reply_markup: menuFeature});
});

export { composer as welcomeFeature };
