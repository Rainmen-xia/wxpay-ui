<template>
    <div class="wxpy-flexbox"
    :class="{
    'flex-col':orient === 'vertical',
    'flex-row':orient === 'horizontal'
    }"
    :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FlexBox",
        props: {
            gutter: {
                type: Number,
                default: 8
            },
            orient: {
                type: String,
                default: "horizontal"
            },
            justify: String,
            align: String,
            wrap: String,
            direction: String
        },
        computed: {
            styles () {
                const styles = {
                    'justify-content': this.justify,
                    '-webkit-justify-content': this.justify,
                    'align-items': this.align,
                    '-webkit-align-items': this.align,
                    'flex-wrap': this.wrap,
                    '-webkit-flex-wrap': this.wrap,
                    'flex-direction': this.direction,
                    '-webkit-flex-direction': this.direction
                }
                return styles
            }
        }
    }
</script>

<style lang="scss">
    .wxpy-flexbox {
        width: 100%;
        text-align: left;
        display: flex;
        box-align: center;
        align-items: center;
        margin-top: 10px;
        .wxpy-flexbox-item {
            flex: 1;
            min-width: 20px;
            width: 0%;
            &:first-child {
                margin-left: 0!important;
                margin-top: 0!important;
            }
        }
    }
    .flex-row {
        box-direction: row;
        box-orient: horizontal;
        flex-direction: row;
    }
    .flex-col {
        box-orient: vertical;
        flex-direction: column;
        > .wxpy-flexbox-item {
            width: 100%;
        }
    }
</style>