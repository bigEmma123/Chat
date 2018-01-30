<template>
    <div class='message'>
       <slot></slot>
    </div>
</template>
<script>
    export default{
        name:"Message",
        mounted () {
            console.log("Message Component Has being mounted");
        }
    }
</script>