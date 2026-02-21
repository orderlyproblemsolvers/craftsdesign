import { d as useAsyncData, u as useHead, m as useSchemaOrg, e as _sfc_main$e, a as __nuxt_component_0$2 } from './server.mjs';
import { d as defineOgImageComponent, _ as __nuxt_component_1$1, a as __nuxt_component_1 } from './defineOgImageComponent-nvDZf0k_.mjs';
import { defineComponent, withAsyncContext, watchEffect, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useSupabaseClient } from './useSupabaseClient-DLOoTqG0.mjs';
import { defineProduct, defineBreadcrumb } from '@unhead/schema-org/vue';
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
import '@iconify/vue';
import 'tailwindcss/colors';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import './useCart-C7lyM5_r.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const supabase = useSupabaseClient();
    const productId = route.params.id;
    const formatPrice = (price) => {
      if (price === null) return "Price on Request";
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
      }).format(price);
    };
    const handleWhatsAppInquiry = () => {
      if (!product.value) return;
      const phoneNumber = "2348136658893";
      const message = `Hello! I am inquiring about the ${product.value.name} (${formatPrice(product.value.price)}). Could you tell me more about commissioning this piece?`;
      (void 0).open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };
    const { data: product, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`product-${productId}`, async () => {
      const { data, error } = await supabase.from("products").select("*").eq("id", productId).single();
      if (error) throw error;
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const { data: suggestedProducts } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`suggested-${productId}`, async () => {
      if (!product.value) return [];
      const { data } = await supabase.from("products").select("*").eq("category", product.value.category).neq("id", product.value.id).limit(4);
      return data;
    })), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      if (product.value) {
        const title = `${product.value.name} | Crafts Design Masterpiece`;
        const description = product.value.description.substring(0, 160);
        useHead({
          title,
          meta: [
            { property: "og:title", content: title },
            { name: "description", content: description },
            { property: "og:description", content: description },
            { property: "og:image", content: product.value.image_url },
            { name: "twitter:card", content: "summary_large_image" }
          ]
        });
        useSchemaOrg([
          defineProduct({
            name: product.value.name,
            description: product.value.description,
            image: [product.value.image_url],
            offers: [
              {
                price: product.value.price || 0,
                priceCurrency: "NGN",
                availability: "https://schema.org/PreOrder"
              }
            ],
            category: product.value.category
          }),
          defineBreadcrumb([
            { name: "Home", item: "/" },
            { name: "Collections", item: "/collections" },
            { name: product.value.name, item: route.path }
          ])
        ]);
        defineOgImageComponent("CraftsRadial", {
          title: product.value.name,
          description: `${product.value.category} Piece • ${formatPrice(product.value.price)}`
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_AppButton = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ProductCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-black pt-24 pb-32" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div class="flex flex-col justify-center items-center py-40" aria-busy="true">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-12 h-12 text-accent animate-spin"
        }, null, _parent));
        _push(`</div>`);
      } else if (!unref(product)) {
        _push(`<div class="max-w-360 mx-auto px-6 lg:px-12 py-32 text-center flex flex-col items-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-search-x",
          class: "w-16 h-16 text-gray-400 mb-6"
        }, null, _parent));
        _push(`<h1 class="text-4xl font-serif text-primary dark:text-white mb-4">Masterpiece Not Found</h1><p class="text-gray-500 mb-8">The sculpture you are looking for may have been archived or moved.</p>`);
        _push(ssrRenderComponent(_component_AppButton, {
          to: "/collections",
          variant: "outline",
          icon: "i-lucide-arrow-left",
          iconPosition: "left",
          rounded: "full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Return to Collections `);
            } else {
              return [
                createTextVNode(" Return to Collections ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<article class="max-w-360 mx-auto px-6 lg:px-12"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-32"><div class="lg:sticky lg:top-32 flex flex-col gap-6"><nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-gray-300 dark:text-gray-600">/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/collections",
          class: "hover:text-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Collections`);
            } else {
              return [
                createTextVNode("Collections")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-gray-300 dark:text-gray-600">/</span><span class="text-primary dark:text-gray-200 font-medium truncate" aria-current="page">${ssrInterpolate(unref(product).name)}</span></nav><div class="relative w-full aspect-4/5 md:aspect-square lg:aspect-4/5 bg-gray-100 dark:bg-white/5 rounded-[2.5rem] overflow-hidden group shadow-2xl"><img${ssrRenderAttr("src", unref(product).image_url)}${ssrRenderAttr("alt", `${unref(product).name} - ${unref(product).category} Sculpture by Crafts Design`)} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"><div class="absolute top-6 left-6"><span class="px-4 py-1.5 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-accent shadow-sm">${ssrInterpolate(unref(product).category)}</span></div></div></div><div class="flex flex-col pt-8 lg:pt-16"><header class="space-y-4 mb-10"><h1 class="text-4xl md:text-5xl lg:text-7xl font-serif text-primary dark:text-white leading-[1.1]">${ssrInterpolate(unref(product).name)}</h1><p class="text-3xl font-light text-accent dark:text-accent/90 mt-4">${ssrInterpolate(formatPrice(unref(product).price))}</p></header><div class="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 mb-12 max-w-none"><p class="leading-relaxed whitespace-pre-line">${ssrInterpolate(unref(product).description)}</p></div><section class="grid grid-cols-2 gap-6 mb-12 p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5"><div class="flex flex-col gap-1"><span class="text-xs font-bold uppercase tracking-wider text-gray-400">Material</span><span class="text-primary dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-layers",
          class: "w-4 h-4 text-accent"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(product).tags?.[0] || "Handcrafted")}</span></div><div class="flex flex-col gap-1"><span class="text-xs font-bold uppercase tracking-wider text-gray-400">Environment</span><span class="text-primary dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-sun-snow",
          class: "w-4 h-4 text-accent"
        }, null, _parent));
        _push(` Weatherproof </span></div><div class="flex flex-col gap-1"><span class="text-xs font-bold uppercase tracking-wider text-gray-400">Lead Time</span><span class="text-primary dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-clock",
          class: "w-4 h-4 text-accent"
        }, null, _parent));
        _push(` 2 - 6 Weeks </span></div><div class="flex flex-col gap-1"><span class="text-xs font-bold uppercase tracking-wider text-gray-400">Delivery</span><span class="text-primary dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-truck",
          class: "w-4 h-4 text-accent"
        }, null, _parent));
        _push(` White Glove </span></div></section><div class="flex flex-col sm:flex-row gap-4 mb-16">`);
        _push(ssrRenderComponent(_component_AppButton, {
          variant: "solid",
          size: "lg",
          rounded: "full",
          icon: "i-lucide-message-circle",
          class: "flex-1 shadow-2xl shadow-accent/20",
          onClick: handleWhatsAppInquiry
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Inquire via WhatsApp `);
            } else {
              return [
                createTextVNode(" Inquire via WhatsApp ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><footer class="flex items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"><div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-shield-check",
          class: "w-5 h-5 text-gray-400"
        }, null, _parent));
        _push(`<span>Lifetime Warranty</span></div><div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-award",
          class: "w-5 h-5 text-gray-400"
        }, null, _parent));
        _push(`<span>Lead Artisan Certified</span></div></footer></div></div>`);
        if (unref(suggestedProducts)?.length) {
          _push(`<section class="pt-24 border-t border-gray-100 dark:border-gray-900"><div class="flex items-end justify-between mb-12"><div class="space-y-2"><h3 class="text-accent text-sm font-bold uppercase tracking-widest">Similar Discoveries</h3><h2 class="text-4xl font-serif text-primary dark:text-white">You may also <span class="italic text-secondary">admire</span></h2></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/collections",
            class: "hidden sm:flex items-center gap-2 text-primary dark:text-white font-medium hover:text-accent transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View All `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-lucide-arrow-right",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" View All "),
                  createVNode(_component_UIcon, {
                    name: "i-lucide-arrow-right",
                    class: "w-4 h-4"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
          ssrRenderList(unref(suggestedProducts), (suggested) => {
            _push(ssrRenderComponent(_component_ProductCard, {
              key: suggested.id,
              product: {
                ...suggested,
                image: suggested.image_url,
                price: formatPrice(suggested.price)
              }
            }, null, _parent));
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B4-Ax1fI.mjs.map
