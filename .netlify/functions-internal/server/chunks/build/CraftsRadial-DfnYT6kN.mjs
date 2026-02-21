import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CraftsRadial",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true,
      default: "Masterpiece Collection"
    },
    description: {
      type: String,
      default: "Curated Elegance. Life-size animal sculptures and estate art."
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-full h-full flex relative overflow-hidden",
        style: { "background": "linear-gradient(to bottom right, #ffffff, #f5f5f4)", "display": "flex" }
      }, _attrs))}><div style="${ssrRenderStyle({ "position": "absolute", "top": "-150px", "right": "-150px", "width": "700px", "height": "700px", "border-radius": "350px", "border": "2px solid #e7e5e4", "display": "flex" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "top": "100px", "right": "-50px", "width": "500px", "height": "500px", "border-radius": "250px", "border": "2px solid #d6d3d1", "display": "flex" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "-100px", "right": "50px", "width": "450px", "height": "450px", "border-radius": "225px", "border": "40px solid #f5f5f4", "display": "flex" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "top": "45%", "right": "25%", "width": "150px", "height": "150px", "border-radius": "75px", "background-color": "#d97706", "opacity": "0.1", "display": "flex" })}"></div><div class="h-full px-24 flex flex-col justify-center relative z-10" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "width": "75%" })}"><div class="flex items-center mb-10" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "20px" })}"><div style="${ssrRenderStyle({ "height": "4px", "width": "60px", "background-color": "#d97706", "display": "flex" })}"></div><span style="${ssrRenderStyle({ "font-family": "sans-serif", "font-size": "16px", "font-weight": "800", "letter-spacing": "0.3em", "color": "#a8a29e", "text-transform": "uppercase", "display": "flex" })}"> Crafts Design </span></div><h1 style="${ssrRenderStyle({ "display": "flex", "font-family": "serif", "font-size": "90px", "font-weight": "800", "color": "#1c1917", "line-height": "1.1", "margin-bottom": "30px", "letter-spacing": "-0.02em" })}">${ssrInterpolate(__props.title)}</h1><p style="${ssrRenderStyle({ "display": "flex", "font-family": "serif", "font-size": "36px", "color": "#57534e", "font-style": "italic", "line-height": "1.4" })}">${ssrInterpolate(__props.description)}</p></div><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "0", "left": "0", "width": "100%", "height": "12px", "background-color": "#d97706", "display": "flex" })}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OgImage/CraftsRadial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CraftsRadial = Object.assign(_sfc_main, { __name: "OgImageCraftsRadial" });

export { CraftsRadial as default };
//# sourceMappingURL=CraftsRadial-DfnYT6kN.mjs.map
