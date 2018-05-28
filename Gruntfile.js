module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-bump");

    grunt.initConfig({
        jshint: {
            all: ["./lib/**/*.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        bump: {
            options: {
                files: ['package.json'],
                commitFiles: ['-a'],
                pushTo: 'origin'
            }
        }
    });

    grunt.registerTask("default", ["jshint"]);
};
