<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        <b-nav-item href="/transactions">Transactions</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid>
      <nuxt />
    </b-container>
  </div>
</template>