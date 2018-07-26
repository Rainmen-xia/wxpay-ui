<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Article</h1>
            <p class="page__dsc">文章</p>
        </div>
        <wxpy-article title="大标题" title__h2="二级标题" title__h3="三级标题">
            <p slot="passage">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
            <div class="img" slot="img">
                <img src="../assets/100x100.png" alt="">
                <img src="../assets/100x100.png" alt="">
            </div>
        </wxpy-article>
        <wxpy-article title="大标题" title__h2="二级标题" title__h3="三级标题">
            <p slot="passage">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
            <div class="img" slot="img">
                <img src="../assets/100x100.png" alt="">
                <img src="../assets/100x100.png" alt="">
            </div>
        </wxpy-article>
    </div>
</template>

<script>
    export default {
        name: "article"
    }
</script>

<style scoped>

</style>