<template>
  <div id="app" class="bg-dark vh-100">
    <b-navbar type="dark" variant="primary">
      <b-navbar-nav>
        <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        <b-nav-item href="/accounts">Accounts</b-nav-item>
        <b-nav-item href="/budgets">Budgets</b-nav-item>
        <b-nav-item href="/transactions">Transactions</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid>
      <nuxt />
    </b-container>
  </div>
</template>