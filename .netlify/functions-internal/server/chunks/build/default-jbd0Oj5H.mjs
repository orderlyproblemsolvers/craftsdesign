import { u as useHead, _ as _export_sfc, a as __nuxt_component_0$2, e as _sfc_main$e, y as useDebounceFn } from './server.mjs';
import { defineComponent, mergeProps, ref, watch, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-DLOoTqG0.mjs';
import { u as useCart } from './useCart-C7lyM5_r.mjs';
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

const _imports_0 = publicAssetsURL("/img/logo.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const isCartOpen = ref(false);
    const isSearchOpen = ref(false);
    const isSearching = ref(false);
    const searchQuery = ref("");
    const searchResults = ref([]);
    ref(null);
    const supabase = useSupabaseClient();
    const { cart } = useCart();
    const links = [
      { name: "Collections", to: "/collections" },
      { name: "About Us", to: "/about" }
    ];
    const performSearch = useDebounceFn(async (query) => {
      if (query.length < 2) {
        searchResults.value = [];
        isSearching.value = false;
        return;
      }
      isSearching.value = true;
      const { data, error } = await supabase.rpc("search_products", {
        search_query: query
      });
      if (error) {
        console.error("Fuzzy search error:", error);
      } else {
        searchResults.value = data || [];
      }
      isSearching.value = false;
    }, 300);
    watch(searchQuery, (newVal) => performSearch(newVal));
    const closeSearch = () => {
      isSearchOpen.value = false;
      searchQuery.value = "";
      searchResults.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dc9ae7c5><header class="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300" data-v-dc9ae7c5><div class="max-w-360 mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-8" data-v-dc9ae7c5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 text-primary dark:text-white group hover:opacity-90 transition-opacity z-10 shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Crafts Logo" class="h-8 md:h-10 w-auto object-contain dark:bg-white" data-v-dc9ae7c5${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Crafts Logo",
                class: "h-8 md:h-10 w-auto object-contain dark:bg-white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-10" data-v-dc9ae7c5><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.to,
          class: "text-sm font-medium hover:text-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center justify-end gap-3 md:gap-6 flex-1 lg:flex-none" data-v-dc9ae7c5><button class="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-primary dark:text-white" aria-label="Search Collections" data-v-dc9ae7c5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: isSearchOpen.value ? "i-lucide-x" : "i-lucide-search",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><div class="hidden md:flex flex-col text-right border-r border-gray-200 dark:border-gray-800 pr-6" data-v-dc9ae7c5><a href="tel:+2348136658893" class="text-sm font-bold text-primary dark:text-white hover:text-accent transition-colors whitespace-nowrap" data-v-dc9ae7c5> +234-813-6658-893 </a><a href="mailto:craftsdesign@yahoo.com" class="text-xs text-gray-500 dark:text-gray-400 hover:text-accent transition-colors" data-v-dc9ae7c5> craftsdesign@yahoo.com </a></div><button class="relative p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-primary dark:text-white flex items-center justify-center" data-v-dc9ae7c5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-shopping-bag",
        class: "w-5 h-5"
      }, null, _parent));
      if (unref(cart).length > 0) {
        _push(`<span class="absolute -top-1 -right-1 size-5 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm" data-v-dc9ae7c5>${ssrInterpolate(unref(cart).length)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="md:hidden p-2 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center" data-v-dc9ae7c5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-menu",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div></div>`);
      if (isSearchOpen.value) {
        _push(`<div class="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden z-50" data-v-dc9ae7c5><div class="max-w-360 mx-auto px-6 lg:px-12 py-10" data-v-dc9ae7c5><div class="relative flex items-center mb-8" data-v-dc9ae7c5>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: isSearching.value ? "i-lucide-loader-2" : "i-lucide-search",
          class: ["absolute left-4 w-6 h-6 text-gray-400", { "animate-spin": isSearching.value }]
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search masterpieces, materials, or details..." class="w-full pl-14 pr-6 py-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-3xl focus:ring-2 focus:ring-accent outline-none transition-all text-2xl font-serif" data-v-dc9ae7c5></div>`);
        if (searchResults.value.length > 0) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-dc9ae7c5><!--[-->`);
          ssrRenderList(searchResults.value, (result) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: result.id,
              to: `/collections/${result.id}`,
              onClick: closeSearch,
              class: "flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:border-gray-800 transition-all group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="size-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/10 shrink-0 shadow-sm border border-gray-100 dark:border-gray-800" data-v-dc9ae7c5${_scopeId}><img${ssrRenderAttr("src", result.image_url)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-v-dc9ae7c5${_scopeId}></div><div class="flex-1 min-w-0" data-v-dc9ae7c5${_scopeId}><h4 class="font-serif font-bold text-primary dark:text-white text-lg group-hover:text-accent transition-colors truncate" data-v-dc9ae7c5${_scopeId}>${ssrInterpolate(result.name)}</h4><div class="flex items-center gap-2 mt-1" data-v-dc9ae7c5${_scopeId}><span class="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-accent/10 text-accent rounded-md font-bold shrink-0" data-v-dc9ae7c5${_scopeId}>${ssrInterpolate(result.category)}</span><span class="text-xs text-gray-400 truncate" data-v-dc9ae7c5${_scopeId}>— ${ssrInterpolate(result.description)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "size-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/10 shrink-0 shadow-sm border border-gray-100 dark:border-gray-800" }, [
                      createVNode("img", {
                        src: result.image_url,
                        class: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode("h4", { class: "font-serif font-bold text-primary dark:text-white text-lg group-hover:text-accent transition-colors truncate" }, toDisplayString(result.name), 1),
                      createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                        createVNode("span", { class: "text-[10px] uppercase tracking-widest px-2 py-0.5 bg-accent/10 text-accent rounded-md font-bold shrink-0" }, toDisplayString(result.category), 1),
                        createVNode("span", { class: "text-xs text-gray-400 truncate" }, "— " + toDisplayString(result.description), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else if (searchQuery.value.length > 2 && !isSearching.value) {
          _push(`<div class="py-16 text-center text-gray-400" data-v-dc9ae7c5>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-lucide-frown",
            class: "w-12 h-12 mx-auto mb-4 opacity-20"
          }, null, _parent));
          _push(`<p class="text-lg" data-v-dc9ae7c5>No matches found for &quot;${ssrInterpolate(searchQuery.value)}&quot;</p><p class="text-sm mt-1" data-v-dc9ae7c5>Check your spelling or try a different keyword.</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (isCartOpen.value || isMobileMenuOpen.value) {
        _push(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" data-v-dc9ae7c5></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isCartOpen.value) {
        _push(`<div class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-black shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800" data-v-dc9ae7c5><div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 shrink-0" data-v-dc9ae7c5><div data-v-dc9ae7c5><div class="flex items-center gap-3" data-v-dc9ae7c5><h2 class="text-2xl font-serif font-bold text-primary dark:text-white" data-v-dc9ae7c5>Your Selection</h2>`);
        if (unref(cart).length > 0) {
          _push(`<button class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors underline" data-v-dc9ae7c5>Clear All</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-xs text-gray-500 mt-1" data-v-dc9ae7c5>Review your favorites before inquiring.</p></div><button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" data-v-dc9ae7c5>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-x",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button></div><div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar" data-v-dc9ae7c5>`);
        if (unref(cart).length === 0) {
          _push(`<div class="h-full flex flex-col items-center justify-center text-center text-gray-400" data-v-dc9ae7c5>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-lucide-heart",
            class: "w-12 h-12 mb-4 opacity-20"
          }, null, _parent));
          _push(`<p class="font-medium" data-v-dc9ae7c5>Your selection is empty.</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/collections",
            onClick: ($event) => isCartOpen.value = false,
            class: "mt-6 text-accent font-medium hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Browse Masterpieces`);
              } else {
                return [
                  createTextVNode("Browse Masterpieces")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(cart), (item) => {
          _push(`<div class="flex gap-4 group" data-v-dc9ae7c5><div class="size-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 shrink-0 border border-gray-200 dark:border-gray-800" data-v-dc9ae7c5><img${ssrRenderAttr("src", item.image_url || item.image)} class="w-full h-full object-cover" data-v-dc9ae7c5></div><div class="flex-1 min-w-0 py-1" data-v-dc9ae7c5><div class="flex justify-between items-start" data-v-dc9ae7c5><h4 class="font-serif font-bold text-primary dark:text-white truncate pr-2" data-v-dc9ae7c5>${ssrInterpolate(item.name)}</h4><button class="text-gray-400 hover:text-red-500 transition-colors p-1" data-v-dc9ae7c5>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-lucide-trash-2",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`</button></div><p class="text-sm text-accent font-medium mt-1" data-v-dc9ae7c5>${ssrInterpolate(item.price || "Price on Request")}</p><p class="text-[10px] uppercase tracking-wider text-gray-400 mt-2" data-v-dc9ae7c5>${ssrInterpolate(item.category)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
        if (unref(cart).length > 0) {
          _push(`<div class="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-gray-800 shrink-0" data-v-dc9ae7c5><button class="w-full py-4 bg-accent text-white rounded-full font-bold shadow-xl shadow-accent/20 flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all" data-v-dc9ae7c5>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-lucide-message-circle",
            class: "w-5 h-5"
          }, null, _parent));
          _push(` Inquire for ${ssrInterpolate(unref(cart).length)} ${ssrInterpolate(unref(cart).length > 1 ? "Items" : "Item")}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (isMobileMenuOpen.value) {
        _push(`<div class="fixed inset-y-0 right-0 z-60 w-full max-w-sm bg-white dark:bg-black shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800" data-v-dc9ae7c5><div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 shrink-0" data-v-dc9ae7c5><h2 class="text-xl font-serif font-bold text-primary dark:text-white" data-v-dc9ae7c5>Menu</h2><button class="p-2 -mr-2 text-gray-500 hover:text-primary rounded-full transition-colors flex items-center justify-center" data-v-dc9ae7c5>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-x",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button></div><nav class="flex flex-col p-6 gap-6 mb-auto overflow-y-auto" data-v-dc9ae7c5><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.name,
            to: link.to,
            class: "text-lg font-medium text-primary dark:text-white hover:text-accent transition-colors block",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav><div class="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-5 shrink-0" data-v-dc9ae7c5><h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400" data-v-dc9ae7c5>Get in Touch</h3><a href="tel:+2348136658893" class="flex items-center gap-3 text-primary dark:text-white hover:text-accent transition-colors font-medium" data-v-dc9ae7c5>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-phone",
          class: "w-5 h-5"
        }, null, _parent));
        _push(` +234-813-6658-893</a><a href="mailto:craftsdesign@yahoo.com" class="flex items-center gap-3 text-primary dark:text-white hover:text-accent transition-colors font-medium" data-v-dc9ae7c5>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-mail",
          class: "w-5 h-5"
        }, null, _parent));
        _push(` craftsdesign@yahoo.com</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-dc9ae7c5"]]), { __name: "AppHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$e;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative bg-primary dark:bg-black text-gray-300 py-16 px-6 overflow-hidden border-t border-gray-200 dark:border-gray-800" }, _attrs))}><div class="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0"></div><div class="relative z-10 max-w-360 mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-12"><div class="max-w-sm space-y-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 text-white group hover:opacity-90 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Crafts Logo" class="h-8 md:h-10 w-auto object-contain brightness-0 invert"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Crafts Logo",
                class: "h-8 md:h-10 w-auto object-contain brightness-0 invert"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-400 leading-relaxed text-sm"> Elevating outdoor sanctuaries with timeless, hand-carved mastery. Designed for the discerning collector. </p><div class="flex gap-3 pt-2"><a href="https://web.facebook.com/craftsdesignnigeria" class="p-2.5 rounded-full bg-white/5 hover:bg-accent text-white transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-facebook",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a></div></div><div class="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 text-sm"><div class="flex flex-col gap-6"><h5 class="text-white font-bold uppercase tracking-widest text-xs">Shop</h5><nav class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: "text-gray-400 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`New Arrivals`);
          } else {
            return [
              createTextVNode("New Arrivals")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: "text-gray-400 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Best Sellers`);
          } else {
            return [
              createTextVNode("Best Sellers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: "text-gray-400 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fountains`);
          } else {
            return [
              createTextVNode("Fountains")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: "text-gray-400 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Planters`);
          } else {
            return [
              createTextVNode("Planters")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex flex-col gap-6"><h5 class="text-white font-bold uppercase tracking-widest text-xs">Support</h5><nav class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-400 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-gray-400 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Returns &amp; Refunds`);
          } else {
            return [
              createTextVNode("Returns & Refunds")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex flex-col gap-6 col-span-2 md:col-span-1"><h5 class="text-white font-bold uppercase tracking-widest text-xs">The Studio</h5><div class="flex flex-col gap-4 text-gray-400"><div class="flex items-start gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-map-pin",
        class: "w-5 h-5 shrink-0 text-accent mt-0.5"
      }, null, _parent));
      _push(`<span class="leading-relaxed">Abuja, Nigeria</span></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-phone",
        class: "w-5 h-5 shrink-0 text-accent"
      }, null, _parent));
      _push(`<span>+234-813-6658-893</span></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-mail",
        class: "w-5 h-5 shrink-0 text-accent"
      }, null, _parent));
      _push(`<span>craftsdesign@yahoo.com</span></div></div></div></div></div><div class="relative z-10 max-w-360 mx-auto pt-8 mt-16 border-t border-white/10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4"><p>© 2026 Crafts Design. All rights reserved.</p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Crafts` : "Crafts - Modern Garden Luxury";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-gray-50 dark:bg-black text-primary dark:text-gray-100 font-sans antialiased selection:bg-accent selection:text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="grow flex flex-col relative z-0">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-jbd0Oj5H.mjs.map
