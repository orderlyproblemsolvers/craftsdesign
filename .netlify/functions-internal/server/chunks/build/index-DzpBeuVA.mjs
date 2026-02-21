import { e as _sfc_main$e } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-DLOoTqG0.mjs';
import 'vue-router';
import '@supabase/ssr';
import '@unhead/addons';
import 'unhead/plugins';
import '@unhead/schema-org/vue';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'node:crypto';
import 'fast-xml-parser';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const _imports_0 = publicAssetsURL("/img/cd-deer.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const email = ref("");
    const isSubmitting = ref(false);
    const isSubscribed = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-black pt-24 pb-32" }, _attrs))}><section class="max-w-360 mx-auto px-6 lg:px-12 mb-24 text-center"><div class="inline-flex items-center gap-3 mb-6"><span class="w-8 h-px bg-accent"></span><h1 class="text-accent text-sm font-bold uppercase tracking-widest">Our Legacy</h1><span class="w-8 h-px bg-accent"></span></div><h2 class="text-5xl md:text-7xl font-serif text-primary dark:text-white leading-tight mb-8"> Art that breathes <br><span class="italic text-secondary">life into spaces.</span></h2><p class="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"> From our workshop in Abuja, we create meticulously crafted, life-size animal sculptures that serve as the heartbeat of grand estates and botanical gardens across the globe. </p></section><section class="max-w-360 mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"><div class="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"><img${ssrRenderAttr("src", _imports_0)} alt="Artisan at work" class="w-full h-full object-cover"><div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div></div><div class="space-y-8"><h3 class="text-4xl font-serif text-primary dark:text-white">Philosophy of Form</h3><p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"> At Crafts Design, we believe a sculpture is more than just a decoration; it’s a silent guardian of your landscape. Every piece—whether cast in bronze, carved from stone, or sculpted in resin—is designed to withstand the test of time and the elements. </p><div class="space-y-4"><div class="flex items-start gap-4"><div class="size-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-award",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><div><h4 class="font-bold text-primary dark:text-white">Unrivaled Detail</h4><p class="text-sm text-gray-500">Each piece undergoes a rigorous finishing process to ensure lifelike texture.</p></div></div><div class="flex items-start gap-4"><div class="size-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-shield-check",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><div><h4 class="font-bold text-primary dark:text-white">Heirloom Quality</h4><p class="text-sm text-gray-500">Using weatherproof materials that age gracefully alongside your garden.</p></div></div></div></div></section><section class="max-w-360 mx-auto px-6 lg:px-12"><div class="bg-gray-50 dark:bg-white/5 rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-white/10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16"><div class="space-y-12"><div><h3 class="text-4xl font-serif text-primary dark:text-white mb-4">Get in Touch</h3><p class="text-gray-500 dark:text-gray-400">Direct consultations are available for private commissions and public installations.</p></div><div class="space-y-6"><a href="tel:+2348136658893" class="flex items-center gap-6 group"><div class="size-14 rounded-2xl bg-white dark:bg-black shadow-sm flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-phone",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div><span class="block text-xs uppercase tracking-widest text-gray-400 font-bold">Call Us</span><span class="text-xl font-medium text-primary dark:text-white">+234 813 6658 893</span></div></a><a href="mailto:craftsdesign@yahoo.com" class="flex items-center gap-6 group"><div class="size-14 rounded-2xl bg-white dark:bg-black shadow-sm flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-mail",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div><span class="block text-xs uppercase tracking-widest text-gray-400 font-bold">Email Us</span><span class="text-xl font-medium text-primary dark:text-white">craftsdesign@yahoo.com</span></div></a></div><button class="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-bold shadow-xl shadow-accent/20 hover:opacity-90 active:scale-95 transition-all">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-message-circle",
        class: "w-6 h-6"
      }, null, _parent));
      _push(` Chat via WhatsApp </button></div><div class="bg-white dark:bg-black/40 rounded-3xl p-10 border border-gray-100 dark:border-white/5 shadow-sm flex flex-col justify-center min-h-100">`);
      if (!isSubscribed.value) {
        _push(`<div class="space-y-6"><div class="space-y-2"><h4 class="text-2xl font-serif font-bold text-primary dark:text-white">Join the Collection</h4><p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Subscribe for exclusive previews of new masterpieces, private gallery invites, and seasonal landscape inspiration. </p></div><form class="space-y-4"><div class="relative">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-mail",
          class: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", email.value)} type="email" required placeholder="Enter your email address" class="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary dark:text-white"></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="w-full py-4 bg-primary text-white dark:bg-white dark:text-primary rounded-2xl font-bold hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2">`);
        if (isSubmitting.value) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-lucide-loader-2",
            class: "w-5 h-5 animate-spin"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(isSubmitting.value ? "Securing your spot..." : "Stay Inspired")}</span></button></form>`);
        if (errorMessage.value) {
          _push(`<p class="text-xs text-red-500 text-center animate-pulse">${ssrInterpolate(errorMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-[10px] text-gray-400 text-center uppercase tracking-widest"> Zero spam. Only pure inspiration. </p></div>`);
      } else {
        _push(`<div class="text-center space-y-4 py-10 animate-in fade-in zoom-in duration-500"><div class="size-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-check-circle",
          class: "w-10 h-10"
        }, null, _parent));
        _push(`</div><h4 class="text-2xl font-serif font-bold text-primary dark:text-white">Welcome Aboard</h4><p class="text-gray-500 dark:text-gray-400"> You&#39;ve been added to our private mailing list. We look forward to sharing our latest works with you. </p><button class="text-xs text-accent underline font-bold uppercase tracking-widest">Done</button></div>`);
      }
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DzpBeuVA.mjs.map
