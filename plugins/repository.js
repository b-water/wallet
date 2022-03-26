import createRepository from '~/api/repository'
export default (ctx, inject) => {
    const repositoryWithAxios = createRepository(ctx.$axios)
  
    const repositories = {
        currency: repositoryWithAxios('/api/currency'),
        account: repositoryWithAxios('/api/account')
    }

    inject('repositories', repositories)
}
