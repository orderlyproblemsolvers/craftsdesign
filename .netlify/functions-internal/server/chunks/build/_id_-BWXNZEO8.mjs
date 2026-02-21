import { e as _sfc_main$e, a as __nuxt_component_0$2, x as __nuxt_component_2$1, n as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
    useSupabaseClient();
    const config = useRuntimeConfig();
    config.public.CLOUDINARY_CLOUD_NAME;
    config.public.CLOUDINARY_UPLOAD_PRESET;
    const categories = ["Bronze & Metal", "Stone & Concrete", "Aquatic", "Mega-Fauna", "Interactive"];
    const toast = ref({ show: false, message: "", type: "success" });
    ref(true);
    ref(false);
    ref(false);
    ref(null);
    ref(null);
    ref(null);
    ref("");
    reactive({
      name: "",
      price: null,
      category: categories[0],
      tagsInput: "",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 relative" }, _attrs))}>`);
      if (toast.value.show) {
        _push(`<div class="${ssrRenderClass([
          "fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 text-white rounded-xl shadow-xl",
          toast.value.type === "error" ? "bg-red-500" : "bg-emerald-500"
        ])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: toast.value.type === "error" ? "i-lucide-alert-circle" : "i-lucide-check-circle",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`<span class="font-medium">${ssrInterpolate(toast.value.message)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "p-2.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors shadow-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-arrow-left",
              class: "w-5 h-5 text-gray-600 dark:text-gray-300"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-lucide-arrow-left",
                class: "w-5 h-5 text-gray-600 dark:text-gray-300"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><h1 class="text-3xl font-serif font-bold text-primary dark:text-white mb-1">Edit Masterpiece</h1><p class="text-gray-500 dark:text-gray-400">Update the details for your inventory.</p></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center py-32 space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-loader-2",
              class: "w-10 h-10 text-accent animate-spin"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-gray-500 font-medium"${_scopeId}>Initializing editor...</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center py-32 space-y-4" }, [
                createVNode(_component_UIcon, {
                  name: "i-lucide-loader-2",
                  class: "w-10 h-10 text-accent animate-spin"
                }),
                createVNode("p", { class: "text-gray-500 font-medium" }, "Initializing editor...")
              ])
            ];
          }
        })
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BWXNZEO8.mjs.map
