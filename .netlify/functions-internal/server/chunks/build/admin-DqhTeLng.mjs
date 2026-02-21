import { _ as _export_sfc, e as _sfc_main$e, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import '@supabase/ssr';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useSupabaseClient();
    const isSidebarOpen = ref(false);
    const isSigningOut = ref(false);
    const navItems = [
      { label: "Dashboard", to: "/admin", icon: "i-lucide-layout-dashboard" },
      { label: "Masterpieces", to: "/admin/products", icon: "i-lucide-box" }
    ];
    watch(() => route.fullPath, () => {
      isSidebarOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 flex flex-col lg:flex-row font-sans text-gray-900 dark:text-gray-100" }, _attrs))} data-v-2406a139><header class="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-30 shadow-sm shrink-0" data-v-2406a139><div class="flex items-center gap-3" data-v-2406a139><div class="size-9 bg-primary dark:bg-white rounded-xl flex items-center justify-center shadow-sm" data-v-2406a139>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-shield-check",
        class: "w-5 h-5 text-white dark:text-primary"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-serif font-bold text-primary dark:text-white" data-v-2406a139>Admin</h2></div><button class="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 active:scale-95 transition-all" data-v-2406a139>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-menu",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></header>`);
      if (isSidebarOpen.value) {
        _push(`<div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" data-v-2406a139></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<aside class="${ssrRenderClass([
        "fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:h-screen lg:shrink-0",
        isSidebarOpen.value ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      ])}" data-v-2406a139><div class="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between shrink-0" data-v-2406a139>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="size-8 bg-primary dark:bg-white rounded-lg flex items-center justify-center" data-v-2406a139${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-lock",
              class: "w-4 h-4 text-white dark:text-primary"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-2406a139${_scopeId}><h2 class="text-lg font-serif font-bold text-primary dark:text-white leading-none" data-v-2406a139${_scopeId}>Crafts Design</h2><p class="text-[10px] uppercase tracking-widest text-gray-500 mt-1" data-v-2406a139${_scopeId}>Admin</p></div>`);
          } else {
            return [
              createVNode("div", { class: "size-8 bg-primary dark:bg-white rounded-lg flex items-center justify-center" }, [
                createVNode(_component_UIcon, {
                  name: "i-lucide-lock",
                  class: "w-4 h-4 text-white dark:text-primary"
                })
              ]),
              createVNode("div", null, [
                createVNode("h2", { class: "text-lg font-serif font-bold text-primary dark:text-white leading-none" }, "Crafts Design"),
                createVNode("p", { class: "text-[10px] uppercase tracking-widest text-gray-500 mt-1" }, "Admin")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden p-2 text-gray-400 hover:text-red-500 transition-colors" data-v-2406a139>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-x",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div><nav class="flex-1 p-4 space-y-1.5 overflow-y-auto custom-scrollbar" data-v-2406a139><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          onClick: ($event) => isSidebarOpen.value = false,
          class: ["flex items-center gap-3 px-4 py-3 rounded-xl transition-all group", [_ctx.$route.path === item.to ? "" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white"]],
          "active-class": "bg-primary text-white shadow-lg shadow-primary/20 dark:bg-white dark:text-black"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: "w-5 h-5 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-medium" data-v-2406a139${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: item.icon,
                  class: "w-5 h-5 shrink-0"
                }, null, 8, ["name"]),
                createVNode("span", { class: "font-medium" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800" data-v-2406a139>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        target: "_blank",
        class: "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-external-link",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm font-medium" data-v-2406a139${_scopeId}>View Live Site</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-lucide-external-link",
                class: "w-5 h-5"
              }),
              createVNode("span", { class: "text-sm font-medium" }, "View Live Site")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav><div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2 shrink-0" data-v-2406a139><button${ssrIncludeBooleanAttr(isSigningOut.value) ? " disabled" : ""} class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 transition-all font-semibold disabled:opacity-50" data-v-2406a139>`);
      if (isSigningOut.value) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-log-out",
          class: "w-5 h-5"
        }, null, _parent));
      }
      _push(` ${ssrInterpolate(isSigningOut.value ? "Signing Out..." : "Sign Out")}</button></div></aside><main class="flex-1 overflow-y-auto relative flex flex-col" data-v-2406a139><div class="p-5 md:p-8 lg:p-12 max-w-400 w-full mx-auto" data-v-2406a139>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2406a139"]]);

export { admin as default };
//# sourceMappingURL=admin-DqhTeLng.mjs.map
