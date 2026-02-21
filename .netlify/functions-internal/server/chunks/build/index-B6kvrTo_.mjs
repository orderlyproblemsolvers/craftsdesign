import { _ as _export_sfc, d as useAsyncData, e as _sfc_main$e } from './server.mjs';
import { d as defineOgImageComponent, a as __nuxt_component_1 } from './defineOgImageComponent-nvDZf0k_.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
import './useCart-C7lyM5_r.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    defineOgImageComponent("CraftsRadial", {
      title: "The Master Collection",
      description: "Explore our complete menagerie of garden estate sculptures."
    });
    const supabase = useSupabaseClient();
    const activeCategory = ref("All");
    const categories = ["All", "Bronze & Metal", "Stone & Concrete", "Aquatic", "Mega-Fauna", "Interactive", "Fibre-Glass"];
    const { data: allProducts, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("products", async () => {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const formatPrice = (price) => {
      if (price === null || price === void 0) return "Price on Request";
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
      }).format(price);
    };
    const filteredProducts = computed(() => {
      if (!allProducts.value) return [];
      if (activeCategory.value === "All") {
        return allProducts.value;
      }
      return allProducts.value.filter((product) => product.category === activeCategory.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_ProductCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-black pt-24 pb-32" }, _attrs))} data-v-84cd1513><div class="max-w-360 mx-auto px-6 lg:px-12" data-v-84cd1513><header class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6" data-v-84cd1513><div class="inline-flex items-center gap-3" data-v-84cd1513><span class="w-8 h-px bg-accent" data-v-84cd1513></span><h1 class="text-accent text-sm font-bold uppercase tracking-widest" data-v-84cd1513>The Master Collection</h1><span class="w-8 h-px bg-accent" data-v-84cd1513></span></div><h2 class="text-5xl md:text-6xl font-serif text-primary dark:text-gray-100 leading-tight" data-v-84cd1513> Curated <span class="italic text-secondary" data-v-84cd1513>Elegance</span></h2><p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed" data-v-84cd1513> Explore our complete menagerie of hand-crafted estate sculptures, interactive garden art, and architectural centerpieces. </p></header><div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 dark:border-gray-800 pb-6" data-v-84cd1513><p class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-84cd1513> Showing ${ssrInterpolate(filteredProducts.value.length)} Masterpieces </p><div class="flex flex-wrap justify-center gap-2" data-v-84cd1513><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([[
          activeCategory.value === category ? "bg-primary border-primary text-white shadow-lg" : "bg-transparent border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-accent"
        ], "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border"])}" data-v-84cd1513>${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center py-24" data-v-84cd1513>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-12 h-12 text-accent animate-spin"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16" data-v-84cd1513><!--[-->`);
        ssrRenderList(filteredProducts.value, (product) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: product.id,
            product: {
              ...product,
              image: product.image_url,
              price: formatPrice(product.price)
            }
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (!unref(pending) && filteredProducts.value.length === 0) {
        _push(`<div class="py-24 text-center text-gray-500" data-v-84cd1513>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-leaf",
          class: "w-12 h-12 mb-4 opacity-50 mx-auto"
        }, null, _parent));
        _push(`<p class="text-lg" data-v-84cd1513>No sculptures found in this category.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84cd1513"]]);

export { index as default };
//# sourceMappingURL=index-B6kvrTo_.mjs.map
