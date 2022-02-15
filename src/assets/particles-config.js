const particlesConfig = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: false,
                value_area: 800
            }
        },
        color: {
            value: "#9218f2"
        },
        shape: {
            type: "edge",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 112.08967173738984,
            color: "#ffffff",
            opacity: 0.25620496397117676,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "bottom-left",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 400.3202562049637,
                rotateY: 880.70456365092
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};




export default particlesConfig