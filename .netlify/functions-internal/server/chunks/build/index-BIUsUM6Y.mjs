import { d as useAsyncData, e as _sfc_main$e, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const searchQuery = ref("");
    const toast = ref({ show: false, message: "", type: "success" });
    const showToast = (message, type = "success") => {
      toast.value = { show: true, message, type };
      setTimeout(() => toast.value.show = false, 4e3);
    };
    const { data: products, pending, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("admin-products-list", async () => {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
      if (error) {
        showToast("Failed to load products.", "error");
        return [];
      }
      return data || [];
    })), __temp = await __temp, __restore(), __temp);
    const filteredProducts = computed(() => {
      if (!products.value) return [];
      if (!searchQuery.value) return products.value;
      const query = searchQuery.value.toLowerCase();
      return products.value.filter(
        (p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
      );
    });
    const formatPrice = (price) => {
      if (price === null || price === void 0) return "On Request";
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 relative" }, _attrs))}>`);
      if (toast.value.show) {
        _push(`<div class="${ssrRenderClass([
          "fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 text-white rounded-xl shadow-2xl",
          toast.value.type === "error" ? "bg-red-500" : "bg-green-500"
        ])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: toast.value.type === "error" ? "i-lucide-alert-circle" : "i-lucide-check-circle",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`<span class="font-medium">${ssrInterpolate(toast.value.message)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-3xl font-serif font-bold text-primary dark:text-white mb-2">Masterpieces</h1><p class="text-gray-500 dark:text-gray-400">View and manage your current inventory.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "inline-flex items-center gap-2 px-6 py-2.5 bg-primary dark:bg-white text-white dark:text-primary font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-plus",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(` Add New `);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-lucide-plus",
                class: "w-5 h-5"
              }),
              createTextVNode(" Add New ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col"><div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2 flex items-center justify-between"><div class="relative w-full max-w-sm"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-search",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search sculptures..." class="w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400 text-sm"></div><span class="hidden sm:inline-block px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full">${ssrInterpolate(filteredProducts.value.length)} Items </span></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse min-w-200"><thead><tr class="border-b border-gray-200 dark:border-gray-800 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-50/30 dark:bg-white/1"><th class="px-6 py-4 font-medium">Sculpture</th><th class="px-6 py-4 font-medium">Category</th><th class="px-6 py-4 font-medium">Price</th><th class="px-6 py-4 font-medium">Date Added</th><th class="px-6 py-4 font-medium text-right">Actions</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800">`);
      if (unref(pending)) {
        _push(`<tr><td colspan="5" class="px-6 py-12 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-8 h-8 text-accent animate-spin mx-auto"
        }, null, _parent));
        _push(`</td></tr>`);
      } else if (filteredProducts.value.length === 0) {
        _push(`<tr><td colspan="5" class="px-6 py-16 text-center"><div class="size-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-box",
          class: "w-8 h-8 text-gray-400"
        }, null, _parent));
        _push(`</div><p class="text-primary dark:text-white font-medium text-lg">No masterpieces found</p><p class="text-gray-500 text-sm mt-1">Adjust your search or add a new product.</p></td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(filteredProducts.value, (product) => {
        _push(`<tr class="hover:bg-gray-50/50 dark:hover:bg-white/2 transition-colors group"><td class="px-6 py-4"><div class="flex items-center gap-4"><div class="shrink-0 size-12 rounded-lg bg-gray-100 dark:bg-white/5 overflow-hidden border border-gray-200 dark:border-gray-800"><img${ssrRenderAttr("src", product.image_url)}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-cover"></div><div><p class="font-serif font-semibold text-primary dark:text-gray-200 line-clamp-1">${ssrInterpolate(product.name)}</p><p class="text-xs text-gray-500 line-clamp-1 truncate max-w-50">${ssrInterpolate(product.description)}</p></div></div></td><td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 whitespace-nowrap">${ssrInterpolate(product.category)}</span></td><td class="px-6 py-4"><span class="font-medium text-primary dark:text-gray-200 whitespace-nowrap">${ssrInterpolate(formatPrice(product.price))}</span></td><td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">${ssrInterpolate(new Date(product.created_at).toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" }))}</td><td class="px-6 py-4 text-right"><div class="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/products/${product.id}`,
          class: "p-2 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors inline-flex",
          title: "Edit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-edit-3",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-lucide-edit-3",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors" title="Delete">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-trash-2",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BIUsUM6Y.mjs.map
