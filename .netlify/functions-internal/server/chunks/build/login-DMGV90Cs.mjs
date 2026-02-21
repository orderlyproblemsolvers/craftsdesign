import { e as _sfc_main$e, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useSupabaseClient } from './useSupabaseClient-DLOoTqG0.mjs';
import '../_/nitro.mjs';
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
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'node:crypto';
import 'fast-xml-parser';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'vue-router';
import '@supabase/ssr';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-black flex flex-col justify-center items-center p-6 selection:bg-accent selection:text-white" }, _attrs))}><div class="mb-8 text-center flex flex-col items-center"><div class="size-12 bg-primary dark:bg-white rounded-xl flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-lock",
        class: "w-6 h-6 text-white dark:text-primary"
      }, null, _parent));
      _push(`</div><h1 class="text-2xl font-serif font-bold text-primary dark:text-white">Crafts Admin</h1><p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Sign in to manage your masterpiece collection.</p></div><div class="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8"><form class="space-y-6"><div class="space-y-1.5"><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label><div class="relative"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-mail",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", email.value)} type="email" placeholder="admin@crafts.com" required${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-500 disabled:opacity-50"></div></div><div class="space-y-1.5"><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label><div class="relative"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-key",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", password.value)} type="password" placeholder="••••••••" required${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-500 disabled:opacity-50"></div></div>`);
      if (errorMessage.value) {
        _push(`<p class="text-sm text-red-500 font-medium text-center">${ssrInterpolate(errorMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="w-full flex items-center justify-center gap-2 py-3 bg-primary dark:bg-white text-white dark:text-primary font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md">`);
      if (isLoading.value) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isLoading.value ? "Authenticating..." : "Sign In")}</button></form></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mt-8 text-sm text-gray-500 hover:text-primary dark:hover:text-white transition-colors flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-arrow-left",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` Return to Public Site `);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-lucide-arrow-left",
                class: "w-4 h-4"
              }),
              createTextVNode(" Return to Public Site ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DMGV90Cs.mjs.map
