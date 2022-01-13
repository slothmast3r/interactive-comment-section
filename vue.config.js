module.exports = {
    publicPath: '/interactive-comment-section/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "/scss/_variables.scss";
          @import "/scss/_general.scss";
        `
            }
        }
    }
}