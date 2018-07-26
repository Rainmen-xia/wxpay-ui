<template>
    <div>
        <div class="wxpy-article">
                    <h1 v-text="title"></h1>
            <section>
                        <h2 v-text="title__h2"></h2>
                <section>
                            <h3 v-text="title__h3"></h3>
                    <slot name="passage"></slot>
                    <slot name="img"></slot>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WxpyArticle",
        props: {
            title: String,
            title__h2: String,
            title__h3: String,
            passage: String,
            icon: String
    }
    }
</script>

<style lang="scss">
    .wxpy-article{
        padding: 20px 15px;
        font-size: 15px;
        h1{
            font-size: 18px;
            font-weight: 400;
            margin-bottom: .9em;
        }
        section{
            margin-bottom: 1.5em;
            h2{
                font-size: 16px;
                font-weight: 400;
                margin-bottom: .34em;
            }
            h3{
                font-weight: 400;
                font-size: 15px;
                margin-bottom: .34em;
            }
            p{
                margin: 0 0 .8em;
            }
        }
    }
</style>