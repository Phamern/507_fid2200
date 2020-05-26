<script>
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<h3>Hi { displayName }!</h3>
<img class='profile-image' src={ photoURL } width="100" alt="profile avatar">
<p>Your userID is { uid }</p>

<style>
    .profile-image {
        border-radius: 50%;
    }
</style>