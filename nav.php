<?php $site = basename($_SERVER['PHP_SELF']); ?>
<nav class="website-header__nav">
    <ul class="website-header__nav-list">
    <li ><a href="index.php" class="website-header__nav-link<?php echo ($site === 'index.php') ? ' website-header__nav-link--active' : null; ?>">About</a></li>
    <li><a href="characters.php" class="website-header__nav-link<?php echo ($site === 'characters.php') ? ' website-header__nav-link--active' : null; ?>">Characters</a></li>
    <li><a href="adventures.php" class="website-header__nav-link<?php echo ($site === 'adventures.php') ? ' website-header__nav-link--active' : null; ?>">Adventures</a></li>
    </ul>
</nav>
<hr>