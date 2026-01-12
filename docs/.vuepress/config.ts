import {defaultTheme, defineUserConfig} from "vuepress"
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import {externalLinkIconPlugin} from '@vuepress/plugin-external-link-icon'

const route = [
    {
        text: "安装与配置",
        link: '/views/install/install.md'
    },
    {
        text: "组件",
        children: [
            '/views/components/crud.md',
            '/views/components/form.md',
            '/views/components/paging.md',
            '/views/components/upload.md',
            '/views/components/preview.md'
        ]
    },
    {
        text: "指令",
        children: [
            '/views/directives/go.md',
            '/views/directives/btn-loading.md'
        ]
    },
    {
        text: "样式类",
        children: [
            '/views/styles/global.md',
            '/views/styles/element-ui.md'
        ]
    },
    {
        text: "工具类",
        children: [
            '/views/util/tool.md',
            '/views/util/time.md'
        ]
    },
    {
        text: "代码工具",
        children: [
            {
                text: "CRUD",
                link: "https://otb-china.github.io/tool-page/#/crud"
            },
            {
                text: "表单生成",
                link: "https://otb-china.github.io/tool-page/#/form"
            },
        ]
    },
    {
        text: "Demo",
        children: [
            {
                text: "知鱼(2022-10 静态)",
                link: "https://otb-china.github.io/zhiyu/#/home"
            }
        ]
    }
];

export default defineUserConfig({
    lang: 'zh-CN',
    title: "h-module",
    description: "开发文档",
    // 设置输出目录
    dest: './dist',
    // 部署的路径
    base: '/h-module/',
    theme: defaultTheme({
        // 默认主题配置
        navbar: route,
        sidebar: route,
        logo: '/images/logo.png',
        backToHome: '去主页看看吧',
        notFound: ["这个页面不存在"]
    }),
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
    plugins: [
        backToTopPlugin(),
        externalLinkIconPlugin({
            locales: {
                '/': {
                    openInNewWindow: 'open in new window',
                },
                '/zh/': {
                    openInNewWindow: '在新窗口打开',
                },
            }
        }),
    ]
});
