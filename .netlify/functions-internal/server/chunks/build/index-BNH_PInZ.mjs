import { d as defineOgImageComponent, _ as __nuxt_component_1$1, a as __nuxt_component_1$2 } from './defineOgImageComponent-nvDZf0k_.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, withAsyncContext, unref, createVNode, ref, openBlock, createBlock, createCommentVNode, useSlots, computed, useTemplateRef, renderSlot, getCurrentInstance, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead, m as useSchemaOrg, _ as _export_sfc, d as useAsyncData, a as __nuxt_component_0$2, e as _sfc_main$e, f as useAppConfig, g as useFormField, h as useFieldGroup, j as useComponentIcons, t as tv, k as _sfc_main$b, b as isDef, l as looseToNumber } from './server.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-DLOoTqG0.mjs';
import { Primitive } from 'reka-ui';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { defineLocalBusiness } from '@unhead/schema-org/vue';
import './useCart-C7lyM5_r.mjs';
import 'vue-router';
import '@supabase/ssr';
import '@unhead/addons';
import 'unhead/plugins';
import '@iconify/vue';
import 'tailwindcss/colors';
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

function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
// @__NO_SIDE_EFFECTS__
function useVModel(props, key, emit, options = {}) {
  var _vm$$emit, _vm$proxy;
  const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || (vm === null || vm === void 0 || (_vm$$emit = vm.$emit) === null || _vm$$emit === void 0 ? void 0 : _vm$$emit.bind(vm)) || (vm === null || vm === void 0 || (_vm$proxy = vm.proxy) === null || _vm$proxy === void 0 || (_vm$proxy = _vm$proxy.$emit) === null || _vm$proxy === void 0 ? void 0 : _vm$proxy.bind(vm === null || vm === void 0 ? void 0 : vm.proxy));
  let event = eventName;
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue$1 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value)) _emit(event, value);
    } else _emit(event, value);
  };
  if (passive) {
    const proxy = ref(getValue$1());
    let isUpdating = false;
    watch(() => props[key], (v) => {
      if (!isUpdating) {
        isUpdating = true;
        proxy.value = cloneFn(v);
        nextTick(() => isUpdating = false);
      }
    });
    watch(proxy, (v) => {
      if (!isUpdating && (v !== props[key] || deep)) triggerEmit(v);
    }, { deep });
    return proxy;
  } else return computed({
    get() {
      return getValue$1();
    },
    set(value) {
      triggerEmit(value);
    }
  });
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: "/img/cd-hippo.jpg"
    },
    subtitle: {
      type: String,
      default: "Est. 2024 Collection"
    },
    title: {
      type: String,
      default: 'Timeless Art <br/> <span class="italic font-light opacity-90">for Your Garden</span>'
    },
    description: {
      type: String,
      default: "Hand-carved mastery for the discerning collector. Elevate your outdoor sanctuary with pieces that whisper elegance."
    },
    ctaText: {
      type: String,
      default: "Explore Collection"
    },
    ctaLink: {
      type: String,
      default: "/collections"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[85vh] min-h-150 flex items-center justify-center overflow-hidden bg-primary-950" }, _attrs))}><div class="absolute inset-0 z-0"><div class="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105 ease-in-out transform-gpu" style="${ssrRenderStyle({ backgroundImage: `url(${__props.image})` })}" role="img" aria-label="Hero background image showing garden luxury"></div><div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10"></div></div><div class="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 animate-fade-in-up"><div class="space-y-4"><span class="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-white mb-4">${ssrInterpolate(__props.subtitle)}</span><h2 class="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none drop-shadow-sm">${__props.title ?? ""}</h2><p class="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">${ssrInterpolate(__props.description)}</p></div><div class="pt-8 flex justify-center">`);
      _push(ssrRenderComponent(_component_AppButton, {
        to: __props.ctaLink,
        size: "lg",
        rounded: "full",
        variant: "white-outline",
        icon: "i-lucide-arrow-right",
        animated: "",
        class: "shadow-lg shadow-black/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.ctaText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.ctaText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "HeroSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MiniCollection",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const { data: products, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("featured-animals", async () => {
      const { data, error } = await supabase.from("products").select("*").limit(8).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const formatNaira = (price) => {
      if (price === null) return "Price on Request";
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
      }).format(price).replace("NGN", "₦");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ProductCard = __nuxt_component_1$2;
      const _component_UIcon = _sfc_main$e;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-1 max-w-360 mx-auto w-full px-6 lg:px-12 py-16 lg:py-24 bg-white/80 dark:bg-black/90" }, _attrs))}><div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"><div class="max-w-2xl"><h3 class="text-accent text-sm font-bold uppercase tracking-wider mb-2">The Menagerie</h3><h2 class="text-4xl md:text-5xl font-serif text-primary dark:text-gray-100 leading-tight"> Life-Size <span class="italic text-secondary">Animal Sculptures</span></h2></div><div class="flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(["All", "Bronze", "Stone", "Prehistoric"], (filter) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: filter,
          to: "/collections",
          class: "px-5 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:border-accent transition-colors text-gray-600 dark:text-gray-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(filter)}`);
            } else {
              return [
                createTextVNode(toDisplayString(filter), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(pending)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
        ssrRenderList(4, (n) => {
          _push(`<div class="aspect-4/5 bg-gray-100 dark:bg-white/5 animate-pulse rounded-4xl"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: product.id,
            product: {
              ...product,
              image: product.image_url,
              price: formatNaira(product.price)
            }
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="flex justify-center mt-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: "inline-flex items-center gap-2 text-primary dark:text-white font-medium hover:text-accent transition-all group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="border-b border-primary dark:border-white group-hover:border-accent pb-1"${_scopeId}>View Full Menagerie</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-arrow-right",
              class: "w-4 h-4 transition-transform group-hover:translate-x-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "border-b border-primary dark:border-white group-hover:border-accent pb-1" }, "View Full Menagerie"),
              createVNode(_component_UIcon, {
                name: "i-lucide-arrow-right",
                class: "w-4 h-4 transition-transform group-hover:translate-x-1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MiniCollection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "MiniCollection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OrderProcess",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        title: "Initial Inquiry",
        description: "Reach out with your vision. Share your desired design, ideal sizing, and preferred material (bronze, stone, concrete, etc.).",
        icon: "i-lucide-message-square"
      },
      {
        title: "Quotation",
        description: "We provide a comprehensive quote detailing the exact price, estimated delivery timeline, and material specifications.",
        icon: "i-lucide-file-text"
      },
      {
        title: "Order Confirmation",
        description: "Approve the finalized quote and secure your commission in our production schedule with a 70% deposit.",
        icon: "i-lucide-credit-card"
      },
      {
        title: "Design & Production",
        description: "We confirm the final design details for your approval, then our artisans begin the intricate crafting process.",
        icon: "i-lucide-pen-tool"
      },
      {
        title: "Review & Delivery",
        description: "Review photos of the finished piece. Upon final payment, we arrange safe delivery or schedule a pickup.",
        icon: "i-lucide-truck"
      },
      {
        title: "Feedback",
        description: "Enjoy your new garden centerpiece! We kindly ask for your feedback to help us continually refine our craft.",
        icon: "i-lucide-star"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_AppButton = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full bg-gray-50 dark:bg-black py-24 lg:py-32 px-6" }, _attrs))}><div class="max-w-360 mx-auto flex flex-col gap-16"><div class="flex flex-col md:flex-row md:items-end justify-between gap-8"><div class="max-w-2xl space-y-4"><div class="inline-flex items-center gap-3"><span class="w-8 h-px bg-accent"></span><h3 class="text-accent text-sm font-bold uppercase tracking-widest">How It Works</h3></div><h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-primary dark:text-gray-100 leading-tight"> The <span class="italic text-secondary">Commission</span> Process </h2></div><p class="text-gray-600 dark:text-gray-400 max-w-md md:text-right leading-relaxed pb-2"> From your initial vision to final installation, we ensure a seamless and collaborative experience tailored to your estate. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="group relative bg-white dark:bg-white/5 border-none rounded-4xl p-8 lg:p-10 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-500"><div class="absolute -right-4 -bottom-8 text-[8rem] font-serif font-black text-gray-50 dark:text-white/5 leading-none select-none group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700 ease-out">${ssrInterpolate(index + 1)}</div><div class="relative z-10 flex flex-col h-full gap-6"><div class="flex items-center justify-between"><div class="size-12 rounded-2xl bg-primary/5 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white group-hover:bg-accent group-hover:text-white transition-colors duration-500">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: step.icon,
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><span class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500"> Step 0${ssrInterpolate(index + 1)}</span></div><div class="space-y-3 mt-auto pt-8"><h4 class="text-xl font-serif font-bold text-primary dark:text-white">${ssrInterpolate(step.title)}</h4><p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[90%]">${ssrInterpolate(step.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="w-full bg-primary dark:bg-gray-900 rounded-4xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"><div class="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div><div class="relative z-10 flex flex-col md:flex-row items-center lg:items-start gap-8 flex-1 text-center md:text-left"><div class="shrink-0 size-16 rounded-full border border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-md">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-hammer",
        class: "w-8 h-8 text-white"
      }, null, _parent));
      _push(`</div><div class="space-y-4 max-w-2xl"><h4 class="text-2xl md:text-3xl font-serif font-bold text-white">Made to Order Masterpieces</h4><p class="text-gray-300 text-sm md:text-base leading-relaxed"> All creations require a <span class="text-white font-semibold">2 to 5 week lead time</span> following a <span class="text-white font-semibold">70% deposit</span>. </p><div class="inline-flex items-center gap-2 bg-black/30 px-4 py-2.5 rounded-xl border border-white/10 mt-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-info",
        class: "w-4 h-4 text-secondary shrink-0"
      }, null, _parent));
      _push(`<p class="text-xs text-gray-300"><strong class="text-white">Concrete Orders:</strong> Require the full 5-week timeline to ensure proper curing and weatherproofing. </p></div></div></div><div class="relative z-10 shrink-0 w-full md:w-auto">`);
      _push(ssrRenderComponent(_component_AppButton, {
        variant: "solid",
        size: "lg",
        rounded: "full",
        icon: "i-lucide-arrow-right",
        class: "w-full md:w-auto shadow-xl shadow-black/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Your Commission `);
          } else {
            return [
              createTextVNode(" Start Your Commission ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderProcess.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "OrderProcess" });
const theme = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInput",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autocomplete: { type: null, required: false, default: "off" },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = /* @__PURE__ */ useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, emitFormFocus, ariaAttrs } = useFormField(props, {});
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.input || {} })({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputRef = useTemplateRef("inputRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: __props.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: __props.placeholder,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base }),
              disabled: unref(disabled),
              required: __props.required,
              autocomplete: __props.autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: __props.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: __props.placeholder,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base }),
                disabled: unref(disabled),
                required: __props.required,
                autocomplete: __props.autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/deer.png");
const _imports_1 = publicAssetsURL("/img/turtle.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CtaSection",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const email = ref("");
    const isLoading = ref(false);
    const isSuccess = ref(false);
    const errorMessage = ref("");
    const handleWhatsApp = () => {
      const phoneNumber = "2348136658893";
      const message = "Hello Crafts team! I am interested in commissioning a bespoke masterpiece and would love to discuss options.";
      (void 0).open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_UInput = _sfc_main$2;
      const _component_AppButton = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full bg-gray-50 dark:bg-black py-24 lg:py-32 px-6 overflow-hidden" }, _attrs))} data-v-26b7b57d><div class="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-8 relative" data-v-26b7b57d><div class="relative group rounded-[2.5rem] bg-primary dark:bg-gray-900 p-10 md:p-16 flex flex-col justify-center min-h-[400px] shadow-2xl" data-v-26b7b57d><div class="absolute -top-12 left-0 w-64 h-64 bg-yellow-600/20 rounded-full blur-[80px] group-hover:bg-yellow-600/40 transition-colors duration-700 pointer-events-none" data-v-26b7b57d></div><img${ssrRenderAttr("src", _imports_0)} alt="Golden Deer Sculpture" class="absolute -top-20 md:-top-32 left-4 md:-left-12 w-48 md:w-72 lg:w-80 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-6 asset-float" data-v-26b7b57d><div class="relative z-10 w-full max-w-md ml-auto text-right flex flex-col items-end" data-v-26b7b57d><div class="inline-flex items-center gap-3 mb-6" data-v-26b7b57d><h3 class="text-accent text-sm font-bold uppercase tracking-widest" data-v-26b7b57d>The Inner Circle</h3><span class="w-8 h-px bg-accent" data-v-26b7b57d></span></div><h2 class="text-3xl md:text-5xl font-serif text-white leading-tight mb-4" data-v-26b7b57d> Curated Elegance, <br data-v-26b7b57d> <span class="italic text-white/70" data-v-26b7b57d>Delivered.</span></h2>`);
      if (isSuccess.value) {
        _push(`<div class="flex flex-col items-end mt-4 animate-fade-in-up" data-v-26b7b57d><div class="flex items-center gap-3 text-accent mb-3" data-v-26b7b57d><span class="text-xl font-serif font-bold text-white" data-v-26b7b57d>Welcome to the circle.</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-check-circle",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><p class="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm" data-v-26b7b57d> Your invitation has been secured. Keep an eye on your inbox for our next private exhibition. </p></div>`);
      } else {
        _push(`<div class="w-full flex flex-col items-end" data-v-26b7b57d><p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm" data-v-26b7b57d> Join our private mailing list for exclusive early access to new collections and bespoke garden design insights. </p><form class="w-full flex flex-col sm:flex-row gap-3 relative" data-v-26b7b57d>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: email.value,
          "onUpdate:modelValue": ($event) => email.value = $event,
          type: "email",
          placeholder: "Enter your email",
          icon: "i-lucide-mail",
          size: "lg",
          variant: "none",
          required: "",
          disabled: isLoading.value,
          class: "flex-1 bg-white/10 dark:bg-black/20 border border-white/20 text-white rounded-full backdrop-blur-sm placeholder:text-gray-400 focus-within:border-accent transition-colors disabled:opacity-50",
          ui: { icon: { trailing: { pointer: "" } } }
        }, null, _parent));
        _push(ssrRenderComponent(_component_AppButton, {
          variant: "solid",
          type: "submit",
          rounded: "full",
          class: "shrink-0",
          disabled: isLoading.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isLoading.value) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-lucide-loader-2",
                  class: "w-4 h-4 animate-spin mr-2"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(isLoading.value ? "Subscribing..." : "Subscribe")}`);
            } else {
              return [
                isLoading.value ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: "i-lucide-loader-2",
                  class: "w-4 h-4 animate-spin mr-2"
                })) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(isLoading.value ? "Subscribing..." : "Subscribe"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
        if (errorMessage.value) {
          _push(`<p class="text-red-400 text-sm mt-3" data-v-26b7b57d>${ssrInterpolate(errorMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div><div class="relative group rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-10 md:p-16 flex flex-col justify-center min-h-100 hover:border-accent dark:hover:border-accent transition-colors duration-500" data-v-26b7b57d><div class="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-colors duration-700 pointer-events-none" data-v-26b7b57d></div><div class="relative z-10 w-full max-w-md mr-auto text-left flex flex-col items-start" data-v-26b7b57d><div class="inline-flex items-center gap-3 mb-6" data-v-26b7b57d><span class="w-8 h-px bg-accent" data-v-26b7b57d></span><h3 class="text-accent text-sm font-bold uppercase tracking-widest" data-v-26b7b57d>Bespoke Requests</h3></div><h2 class="text-3xl md:text-5xl font-serif text-primary dark:text-white leading-tight mb-4" data-v-26b7b57d> Commission a <br data-v-26b7b57d> <span class="italic text-secondary" data-v-26b7b57d>Masterpiece.</span></h2><p class="text-gray-900 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm" data-v-26b7b57d> Have a specific vision? Connect directly with our lead artisans to discuss custom materials, sizing, and pricing. </p>`);
      _push(ssrRenderComponent(_component_AppButton, {
        variant: "outline",
        size: "lg",
        rounded: "full",
        icon: "i-lucide-message-circle",
        iconPosition: "left",
        class: "shadow-xl shadow-accent/5",
        onClick: handleWhatsApp
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Chat on WhatsApp `);
          } else {
            return [
              createTextVNode(" Chat on WhatsApp ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><img${ssrRenderAttr("src", _imports_1)} alt="Ancient Jade Turtle Sculpture" class="absolute -bottom-8 md:-bottom-16 -right-8 md:-right-16 w-56 md:w-80 lg:w-96 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] z-20 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-8 asset-breathe" data-v-26b7b57d></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-26b7b57d"]]), { __name: "CtaSection" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Crafts Design | Life-Size Animal Sculptures & Estate Art in Abuja",
      meta: [
        { property: "og:title", content: "Crafts Design | Premium Garden Estate Sculptures" },
        { name: "description", content: "Exquisite, hand-crafted life-size animal sculptures. From bronze to stone, our masterpieces define luxury gardens and estates in Abuja and beyond." },
        { property: "og:description", content: "Explore our complete menagerie of meticulously crafted garden estate sculptures." },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    useSchemaOrg([
      defineLocalBusiness({
        name: "Crafts Design",
        logo: "/img/logo.png",
        address: {
          addressLocality: "Abuja",
          addressRegion: "FCT",
          addressCountry: "NG"
        },
        image: "/img/cd-lion.jpg",
        telephone: "+2348136658893",
        url: "https://craftsdesign.com.ng"
        // Replace with your actual domain
      })
    ]);
    defineOgImageComponent("CraftsRadial", {
      title: "Crafts Design: The Master Collection",
      description: "Life-size animal sculptures and bespoke estate art curated for the discerning eye."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_MiniCollection = __nuxt_component_1;
      const _component_OrderProcess = __nuxt_component_2;
      const _component_CtaSection = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(`<section id="collections" aria-label="Our Masterpieces">`);
      _push(ssrRenderComponent(_component_MiniCollection, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_OrderProcess, null, null, _parent));
      _push(ssrRenderComponent(_component_CtaSection, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BNH_PInZ.mjs.map
