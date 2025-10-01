document.addEventListener("DOMContentLoaded", () => {
    const catImages = [
        "https://wallpapers.com/images/high/funny-cats-pictures-yivqr1nfa8y52y60.webp",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs_M9ckH5L8_xr-vW5aplcVnbBZ4oa51bebsJZ9K8f7E4JX9erKM5-LQqfaBIIxOjowlUC8VDx5mh9IKN_Db-nP2fB36B-AwZ645QibjOizj0QfzTLvsFtCG9A6wODWM08PyZgkW7WZ2A/s1600/funny-cat-pictures-009-002.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiekc-wh9hByJWNDME32ODPDnQtCTKhiS7z-r5A4gAtxhm737kuMDdxsPIwkznSZkXRBVnQVM9kqQIpZtWPY4xD933I8H4OQhv8I2oHbAkUVLGbOaP0Urv2bIg8v71oyw2As5mZGrWyD8Y/s1600/funny-cat-pictures-009-004.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDQkLs6G-2ZalWsXKto0X7KQpv0gQOX28LHScLO1_T7Q8jSme2K-uPQHqoP-pikNtWkRoJfUux29xRtqOWfo1Ht9N869Ct9sd_tXxQREv8VDgGXOXsGyhPLaUNkiVGbZsE_StC2qFq9WE/s1600/funny-cat-pictures-009-006.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfxspAIgYv-fzR25axU63ddsNUGPG4iFP5oOF5jf6r-9MHztfixJRCQQFYG2jxBYMG69tU4WqHYYdNxcXG5SBUlPLdkLzh1ZKA9vgzbEgQMB3LCANFCtGsp0flysUjvIC1YubAWxff99U/s640/funny-cat-pictures-009-007.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHQbxPAXexL0dVeVjDuV4V4Adr4yrXxchIwxf96MVIqGSXzRHV_PPsMYYgbgmHhY5pjzmEWv00nRwEu-6YyO33H2Aj9FkJjMXIUUZG2O1A478FH2SKc0FjPUaPztb_RdxqQn7pJl3EcZI/s1600/funny-cat-pictures-009-008.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip9P9BBOwPKYeBR_tTX3NmIZInEEZ4pLFYw9c83fgS9gYT31TnEr_QdcQZ_CNWEdNtHnuTdByMepGSZ21E2bcYXSIrDNYlmW24IkpUlhzVsOGL_J2R6WAW3Th-034eaPFRYPi0hYoLgW0/s640/funny-cat-pictures-009-009.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwKCbIUy-b4QQU6EcRG8P-kjs3NJ-j5vT3n9NW-h4lBZJahA7PEryvIa0oekQusGxXk7wgUnz34xHOmKNvCObdTmTORBB9mBsE-kUPDoHIpKLnFXVwXw8mnWRhV9_3Fzxc89kapzazQ5k/s1600/funny-cat-pictures-009-011.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4DyoVOhgTclBSiic9x-ko62Hzd9Yjg_FkNVLY0VwrFLp1ur5afdEVXAF7eUxuah1lNaP-P-vTvvaKz5DWAnxlTD13BBYhezHtq3NOpG5UXp0sGw4jehAT1BibSqPCULJYl5S9UZVpbNo/s1600/funny-cat-pictures-009-012.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWrjtsv2SfPWvB9AqCx1l_oK4Zg97VX-h9o5CUvRrT2vHDnxoH5j-p7n_rsTLA79qRSW43iPt-_MIotcQcU9HSP3B4U8idMrwRgID7Sfc9kj_9ZPb0qa-PJfA8_drxbTxIW0Et85ljSPg/s640/funny-cat-pictures-009-015.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUACDeiOllHNg50V5vzA2iPmD3_GxR_Z1vRFRFofUonxOvwKTQeCF3BYu-Qc3Csy8RTEWrtM-gQ16yo1F5ygZBXxiMGHc-BqEtv-5a4vbVGT3D3Cu3Mo_0cW__dxMFWEMrCRdbSehJ4Ts/s640/funny-cat-pictures-009-017.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguqna0BFKBZhaqAY6eoXdFo9RZAeUNCbC5k0jMkE3AvPmwkr86W87PT1iThvC43N9sD0FEzTMNLQHBYJVk1FCjanTNfoKA2T5jddLwds6Raf2GGipGJ-sj7q4n4fGwKoLB3oCJ_YE_n9U/s640/funny-cat-pictures-009-016.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ2Xd0UwjjyVJSmzUQfUeSZ_IVOX3FAr5bgikUnTIF980zT6QaPMWtziTh-CGRCuwPhUkphi3dNXwI0e4YlsFQZSw0lp55BPo1xNK49i3-50tt2RAQ-RhDl9GTNcugL0exeGyarmd6YPE/s1600/funny-cat-pictures-009-018.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-l5QxpeuOXu_PFDJuGKfAWngB4Fi7BCqDu4-3Go-EJuu2OZCBRprqO9ue09H1vCY-skE-SRWC_uy6b-P1aK_3lfjHz6sAAc9EVS2xtIeHNLPJ-rXSEkSm0rz7UOjKa_YE-ltm7fueQzo/s1600/funny-cat-pictures-009-020.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgutauM8SSGEGL-g9Wz226E6H3xwRehAbxjyktXT8xeuC9NkkDMIHVdscsLKJaF6y1rzcogK_UXyUMvM6qpFHaD6YyavhlkOsa732Pq1pSwoOVusQCoHlgPnJA4in68XwVrM5Eyy-TF4mg/s640/funny-cat-pictures-009-021.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyk45WRKzPPtEhiuvJaqoQ2LbIdSPXCVCQ2LXNNa7mFOx8CLJgeon7erVJpcGPzPPsd0d8GWEUMCClEu7TINhWwHuAeD_4xqSeINQ_9onGiSneW30RvWDcQIVC9lfxVz0blm1KsVVEXUM/s1600/funny-cat-pictures-009-025.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha-QK5cXt9gFIrQzf5TAPKFmn1_YPSKB8nq0tbO5orURBdZUKUvp4OfqDnE_ihBXcgzcJoOESzvyEIjVWsaufxPISWHH_Buu2AbcGdZuxD_z82OfcrBjil03NffoeT19OdAN1IClWGR5U/s1600/funny-cat-pictures-009-027.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiECcjVl4O120PKZ88u1bcLwzXZ_sfFAeWgM_tdWkNI2r32rZNaSyy51yxjT-5c3LDWHCbD3AYiaHgvb0qpFNhSkGE_HWJ7jbKiUJjtrgx660N-N2hhl8cK2zp9RY32QjKXyJSY6nQ7XN0/s640/funny-cat-pictures-009-029.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig_t3liLg07Wpi51mBczAcp1wpdkuEFMn5vGpvc70ZzRqmL6_9zSLB4bxbkU8Q3pYynfSyAvp_d-4iqWXL5Wa3-A1uIWciv_Ld6BcEC4XL8SoI9SlBpD1RPm8naHxEzfrgzDBRdPcQsF8/s1600/funny-cat-pictures-009-040.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsR5srR28Lz4mn9KKJF3K3I2aXvwouxWyCZKop59-n-rR5hVVmGzqAXuniWz5bYiKO-QvSKDkm2VT_FvjFjIbi3Cltz2NWZ-9w5Nh0ikY_T58OO4Ymb47azHiTh5C2N_1sNaalHwopb1w/s1600/funny-cat-pictures-009-041.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbkQj3r8sNhJrGMigF10qBxIQXLXc3dCJze8VVz3NrIaOcmQwg6LeMwNnIdMVbYcw6ojfTOAxfgO1ILOh4AGw1vaarxJG9ZXMAZmzB1ImAx3_cRNM0fmaApcQ-DIWjENVKCYewLtLe2uA/s1600/funny-cat-pictures-009-042.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMRlX_djI1iNFG0VJJcxv_UFHV3oiNj3-OPUKCnJ3_oaFrsGfdzWk4oJIsGAoG3xVYxV2XlzP8uvh6xagjPKraODXT-HGUlTn_MaRBnkTQz1sz2WZmwyfluqt7jQmrNc1xsZZz-KbK87E/s640/funny-cat-pictures-009-046.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDqpYd_1RtnnuqJbqRSu7yCGbL_IuuhEi9J_Mn7qspumDejJOwjQhZ-CXQoBQiKIxddReRtQax40HB1A4Y4wOK_URIppMRtu_PoUOLuYGUbQEdyju8VMKfT0ZKXZnvHLk-HCLkZxAPMNc/s1600/funny-cat-pictures-009-049.jpg"
    ];

    const imageContainerEl = document.querySelector(".img-container");
    const btnEl = document.querySelector(".btn");

    if (!imageContainerEl) {
        console.error('Error: .img-container element not found');
        return;
    }

    if (!btnEl) {
        console.error('Eror: .btn element not found');
        return;
    }

    loadRandomCats();

    btnEl.addEventListener("click", () => {
        loadRandomCats();
    });

    function loadRandomCats() {
        imageContainerEl.innerHTML = "";

        const shuffledImages = [...catImages].sort(() => Math.random() - 0.5);

        for (let i = 0; i < 3; i++) {
            const newImgEl = document.createElement("img");
            newImgEl.src = shuffledImages[i];
            newImgEl.alt = "Random feline creature fellow of the night image";
            imageContainerEl.appendChild(newImgEl);
        }
    }
});
