import { o as useNuxtApp, p as useRoute, q as useOgImageRuntimeConfig, s as setHeadOgImagePrebuilt, r as getOgImagePath, w as createOgImageMeta, a as __nuxt_component_0$2, e as _sfc_main$e, f as useAppConfig, h as useFieldGroup, j as useComponentIcons, t as tv, k as _sfc_main$b } from './server.mjs';
import { ref, toValue, defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, renderSlot, createTextVNode, toDisplayString, useSlots, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { u as useCart } from './useCart-C7lyM5_r.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    to: { type: String, default: null },
    type: { type: String, default: "button" },
    variant: {
      type: String,
      default: "solid",
      validator: (v) => ["solid", "outline", "soft", "white-outline"].includes(v)
    },
    size: {
      type: String,
      default: "md",
      validator: (v) => ["sm", "md", "lg"].includes(v)
    },
    rounded: {
      type: String,
      default: "lg",
      validator: (v) => ["md", "lg", "full"].includes(v)
    },
    icon: { type: String, default: null },
    iconPosition: { type: String, default: "right" },
    block: { type: Boolean, default: false },
    animated: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm",
      lg: "px-8 py-4 text-base"
    };
    const roundedClasses = {
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    };
    const variantClasses = {
      solid: "bg-accent text-white hover:bg-opacity-90 shadow-md",
      outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
      soft: "border border-accent/30 bg-accent/5 text-accent hover:bg-accent hover:text-white dark:hover:text-black",
      "white-outline": "border border-white text-white hover:text-primary"
    };
    const animatedBgClass = computed(() => {
      if (props.variant === "white-outline") return "bg-white";
      if (props.variant === "outline") return "bg-primary dark:bg-white";
      return "bg-white/20";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.to ? unref(__nuxt_component_0$2) : "button"), mergeProps({
        to: __props.to,
        type: __props.to ? void 0 : __props.type,
        class: [
          "group relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out outline-none",
          __props.block ? "w-full" : "",
          roundedClasses[__props.rounded],
          sizeClasses[__props.size],
          variantClasses[__props.variant],
          __props.animated ? "overflow-hidden" : ""
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.animated) {
              _push2(`<span class="${ssrRenderClass([animatedBgClass.value, "absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"])}"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="relative flex items-center justify-center gap-2"${_scopeId}>`);
            if (__props.icon && __props.iconPosition === "left") {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: __props.icon,
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
            if (__props.icon && __props.iconPosition === "right") {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: __props.icon,
                class: ["w-5 h-5 transition-transform", __props.animated ? "group-hover:translate-x-1" : ""]
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
          } else {
            return [
              __props.animated ? (openBlock(), createBlock("span", {
                key: 0,
                class: ["absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left", animatedBgClass.value]
              }, null, 2)) : createCommentVNode("", true),
              createVNode("span", { class: "relative flex items-center justify-center gap-2" }, [
                __props.icon && __props.iconPosition === "left" ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: __props.icon,
                  class: "w-5 h-5"
                }, null, 8, ["name"])) : createCommentVNode("", true),
                createVNode("span", null, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                __props.icon && __props.iconPosition === "right" ? (openBlock(), createBlock(_component_UIcon, {
                  key: 1,
                  name: __props.icon,
                  class: ["w-5 h-5 transition-transform", __props.animated ? "group-hover:translate-x-1" : ""]
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$2, { __name: "AppButton" });
const theme = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
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
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$1 = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.badge || {} })({
      color: props.color,
      variant: props.variant,
      size: fieldGroupSize.value || props.size,
      square: props.square || !slots.default && !props.label,
      fieldGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "base",
        class: ui.value.base({ class: [props.ui?.base, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: unref(trailingIconName),
                  "data-slot": "trailingIcon",
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
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
              ]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => [
                __props.label !== void 0 && __props.label !== null ? (openBlock(), createBlock("span", {
                  key: 0,
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                  key: 0,
                  name: unref(trailingIconName),
                  "data-slot": "trailingIcon",
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { isInCart } = useCart();
    const handleWhatsAppInquiry = () => {
      const phoneNumber = "2348136658893";
      const message = `Hello Crafts team! I'm inquiring about the ${props.product.name} (${props.product.price || "Price on Request"}). Is this masterpiece currently available for commission?`;
      const encodedMessage = encodeURIComponent(message);
      (void 0).open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$e;
      const _component_UBadge = _sfc_main$1;
      const _component_AppButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group flex flex-col gap-4 h-full" }, _attrs))}><div class="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-white/5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${__props.product.id}`,
        class: "absolute inset-0 z-0",
        "aria-label": `View details for ${__props.product.name}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="${ssrRenderStyle({ backgroundImage: `url(${__props.product.image_url || __props.product.image})` })}"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", {
                class: "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110",
                style: { backgroundImage: `url(${__props.product.image_url || __props.product.image})` }
              }, null, 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([[
        unref(isInCart)(__props.product.id) ? "bg-accent text-white opacity-100 scale-110" : "bg-white/80 dark:bg-black/40 text-primary dark:text-white opacity-0 group-hover:opacity-100"
      ], "absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg border border-white/20"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(isInCart)(__props.product.id) ? "i-lucide-heart" : "i-lucide-heart",
        class: ["w-5 h-5 transition-transform", { "fill-current": unref(isInCart)(__props.product.id) }]
      }, null, _parent));
      _push(`</button><div class="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2 pr-4 pointer-events-none"><!--[-->`);
      ssrRenderList(__props.product.tags, (tag) => {
        _push(ssrRenderComponent(_component_UBadge, {
          key: tag,
          color: "white",
          variant: "solid",
          class: "bg-white/90 dark:bg-black/80 backdrop-blur text-[10px] uppercase tracking-wider text-primary dark:text-gray-200 pointer-events-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="space-y-1 flex flex-col flex-1"><div class="flex justify-between items-start gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${__props.product.id}`,
        class: "group-hover:text-accent transition-colors line-clamp-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-serif font-semibold text-primary dark:text-gray-100"${_scopeId}>${ssrInterpolate(__props.product.name)}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-serif font-semibold text-primary dark:text-gray-100" }, toDisplayString(__props.product.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-lg font-medium text-primary dark:text-gray-100 shrink-0">${ssrInterpolate(__props.product.price)}</p></div><p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 flex-1">${ssrInterpolate(__props.product.description)}</p><div class="pt-2 mt-auto">`);
      _push(ssrRenderComponent(_component_AppButton, {
        variant: "soft",
        block: "",
        icon: "i-lucide-message-circle",
        iconPosition: "left",
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "ProductCard" });
function defineOgImage(_options = {}) {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = toValue(_options);
  if (options === false) {
    return;
  }
  const validOptions = options;
  for (const key in defaults) {
    if (validOptions[key] === void 0)
      validOptions[key] = defaults[key];
  }
  if (route.query)
    validOptions._query = route.query;
  if (validOptions.url) {
    setHeadOgImagePrebuilt(validOptions);
    return;
  }
  const path = getOgImagePath(basePath, validOptions);
  createOgImageMeta(path, validOptions, nuxtApp.ssrContext);
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}

export { __nuxt_component_1$1 as _, __nuxt_component_1 as a, defineOgImageComponent as d };
//# sourceMappingURL=defineOgImageComponent-nvDZf0k_.mjs.map
