import { _ as _export_sfc, d as useAsyncData, e as _sfc_main$e, n as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, reactive, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
    const config = useRuntimeConfig();
    const supabase = useSupabaseClient();
    config.public.CLOUDINARY_CLOUD_NAME;
    config.public.CLOUDINARY_UPLOAD_PRESET;
    const categories = ["Bronze & Metal", "Stone & Concrete", "Aquatic", "Mega-Fauna", "Interactive"];
    const isDragging = ref(false);
    const isSubmitting = ref(false);
    const notification = ref("");
    ref(null);
    ref(null);
    const imagePreview = ref(null);
    const productState = reactive({
      name: "",
      price: null,
      category: categories[0],
      tagsInput: "",
      description: ""
    });
    const { data: subscribers, pending: pendingSubscribers } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("subscribers", async () => {
      const { data, error } = await supabase.from("subscribers").select("*").order("created_at", { ascending: false });
      if (error) console.error("Error fetching subscribers:", error);
      return data || [];
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10" }, _attrs))} data-v-e3260be0><div data-v-e3260be0><h1 class="text-3xl font-serif font-bold text-primary dark:text-white mb-2" data-v-e3260be0>Dashboard</h1><p class="text-gray-500 dark:text-gray-400" data-v-e3260be0>Manage your collections and audience.</p></div>`);
      if (notification.value) {
        _push(`<div class="fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl shadow-2xl" data-v-e3260be0>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-check-circle",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`<span class="font-medium" data-v-e3260be0>${ssrInterpolate(notification.value)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 xl:grid-cols-3 gap-8" data-v-e3260be0><div class="xl:col-span-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col" data-v-e3260be0><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2" data-v-e3260be0><div class="flex items-center gap-2" data-v-e3260be0>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-plus-circle",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`<h3 class="font-bold text-primary dark:text-white" data-v-e3260be0>Add New Masterpiece</h3></div></div><div class="p-6 md:p-8 flex-1" data-v-e3260be0><form class="space-y-8" data-v-e3260be0><div class="space-y-2" data-v-e3260be0><label class="block text-sm font-medium text-gray-700 dark:text-gray-200" data-v-e3260be0> Sculpture Image <span class="text-red-500" data-v-e3260be0>*</span></label><div class="${ssrRenderClass([
        "relative w-full h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center overflow-hidden transition-all cursor-pointer group",
        isDragging.value ? "border-accent bg-accent/5" : "border-gray-300 dark:border-gray-700 hover:border-accent hover:bg-gray-50 dark:hover:bg-white/5",
        imagePreview.value ? "border-transparent" : ""
      ])}" data-v-e3260be0><input type="file" accept="image/jpeg, image/png, image/webp" class="hidden" data-v-e3260be0>`);
      if (imagePreview.value) {
        _push(`<div class="absolute inset-0 w-full h-full" data-v-e3260be0><img${ssrRenderAttr("src", imagePreview.value)} class="w-full h-full object-cover" data-v-e3260be0><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm" data-v-e3260be0><p class="text-white font-medium flex items-center gap-2" data-v-e3260be0>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-refresh-cw",
          class: "w-5 h-5"
        }, null, _parent));
        _push(` Change Image </p></div></div>`);
      } else {
        _push(`<div class="text-center px-4 pointer-events-none" data-v-e3260be0><div class="size-16 mx-auto rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-accent" data-v-e3260be0>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-upload-cloud",
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</div><p class="text-primary dark:text-white font-medium mb-1" data-v-e3260be0>Click to upload or drag and drop</p><p class="text-xs text-gray-500" data-v-e3260be0>SVG, PNG, JPG or WEBP (Max 5MB)</p></div>`);
      }
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-e3260be0><div class="space-y-1.5" data-v-e3260be0><label class="block text-sm font-medium text-gray-700 dark:text-gray-200" data-v-e3260be0> Sculpture Name <span class="text-red-500" data-v-e3260be0>*</span></label><input${ssrRenderAttr("value", productState.name)} type="text" placeholder="e.g. Graceful Bronze Deer" required class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400" data-v-e3260be0></div><div class="space-y-1.5" data-v-e3260be0><label class="block text-sm font-medium text-gray-700 dark:text-gray-200" data-v-e3260be0> Price (USD) </label><div class="relative" data-v-e3260be0><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400" data-v-e3260be0><p class="w-4 h-4 self-center" data-v-e3260be0>₦</p></div><input${ssrRenderAttr("value", productState.price)} type="number" placeholder="Optional" class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400" data-v-e3260be0></div><p class="text-xs text-gray-500 mt-1" data-v-e3260be0>Leave blank for &#39;Price on Request&#39;</p></div><div class="space-y-1.5" data-v-e3260be0><label class="block text-sm font-medium text-gray-700 dark:text-gray-200" data-v-e3260be0> Category <span class="text-red-500" data-v-e3260be0>*</span></label><div class="relative" data-v-e3260be0><select required class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white appearance-none cursor-pointer" data-v-e3260be0><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<option${ssrRenderAttr("value", cat)} class="bg-white dark:bg-gray-900" data-v-e3260be0${ssrIncludeBooleanAttr(Array.isArray(productState.category) ? ssrLooseContain(productState.category, cat) : ssrLooseEqual(productState.category, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
      });
      _push(`<!--]--></select><div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400" data-v-e3260be0>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-chevron-down",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div></div></div><div class="space-y-1.5" data-v-e3260be0><label class="block text-sm font-medium text-gray-700 dark:text-gray-200" data-v-e3260be0> Comma-separated Tags </label><input${ssrRenderAttr("value", productState.tagsInput)} type="text" placeholder="Bronze, Life-Size" class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400" data-v-e3260be0></div></div><div class="space-y-1.5" data-v-e3260be0><label class="block text-sm font-medium text-gray-700 dark:text-gray-200" data-v-e3260be0> Description <span class="text-red-500" data-v-e3260be0>*</span></label><textarea rows="4" placeholder="Describe the masterpiece..." required class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400 resize-y" data-v-e3260be0>${ssrInterpolate(productState.description)}</textarea></div><div class="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-800" data-v-e3260be0><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-opacity-90 text-white font-medium rounded-lg transition-all shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed" data-v-e3260be0>`);
      if (isSubmitting.value) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-save",
          class: "w-5 h-5"
        }, null, _parent));
      }
      _push(` ${ssrInterpolate(isSubmitting.value ? "Uploading & Saving..." : "Save Product")}</button></div></form></div></div><div class="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm flex flex-col h-200 overflow-hidden" data-v-e3260be0><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2 flex items-center justify-between shrink-0" data-v-e3260be0><div class="flex items-center gap-2" data-v-e3260be0>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-users",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`<h3 class="font-bold text-primary dark:text-white" data-v-e3260be0>Recent Signups</h3></div><span class="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full" data-v-e3260be0>${ssrInterpolate(unref(subscribers) ? unref(subscribers).length : 0)} Total </span></div><div class="p-6 overflow-y-auto flex-1 custom-scrollbar" data-v-e3260be0>`);
      if (unref(pendingSubscribers)) {
        _push(`<div class="flex justify-center items-center h-40" data-v-e3260be0>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-loader-2",
          class: "w-8 h-8 text-accent animate-spin"
        }, null, _parent));
        _push(`</div>`);
      } else if (!unref(subscribers) || unref(subscribers).length === 0) {
        _push(`<div class="text-center py-16 flex flex-col items-center" data-v-e3260be0><div class="size-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-4" data-v-e3260be0>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-mail-open",
          class: "w-8 h-8 text-gray-400"
        }, null, _parent));
        _push(`</div><p class="text-primary dark:text-white font-medium" data-v-e3260be0>No subscribers yet</p><p class="text-sm text-gray-500 mt-1" data-v-e3260be0>Your mailing list signups will appear here.</p></div>`);
      } else {
        _push(`<div class="space-y-3" data-v-e3260be0><!--[-->`);
        ssrRenderList(unref(subscribers), (sub) => {
          _push(`<div class="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800 hover:border-accent/30 transition-colors" data-v-e3260be0><div class="flex items-center gap-4 min-w-0" data-v-e3260be0><div class="shrink-0 size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent" data-v-e3260be0>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-lucide-mail",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`</div><div class="min-w-0" data-v-e3260be0><p class="text-sm font-medium text-primary dark:text-gray-200 truncate" data-v-e3260be0>${ssrInterpolate(sub.email)}</p><p class="text-xs text-gray-500 mt-0.5" data-v-e3260be0>${ssrInterpolate(new Date(sub.created_at).toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" }))}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3260be0"]]);

export { index as default };
//# sourceMappingURL=index-B00obsUt.mjs.map
