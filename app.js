document.addEventListener("DOMContentLoaded", () => {
    const catImages = [
        { url: "https://wallpapers.com/images/high/funny-cats-pictures-yivqr1nfa8y52y60.webp", weight: 10 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs_M9ckH5L8_xr-vW5aplcVnbBZ4oa51bebsJZ9K8f7E4JX9erKM5-LQqfaBIIxOjowlUC8VDx5mh9IKN_Db-nP2fB36B-AwZ645QibjOizj0QfzTLvsFtCG9A6wODWM08PyZgkW7WZ2A/s1600/funny-cat-pictures-009-002.jpg", weight: 51 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiekc-wh9hByJWNDME32ODPDnQtCTKhiS7z-r5A4gAtxhm737kuMDdxsPIwkznSZkXRBVnQVM9kqQIpZtWPY4xD933I8H4OQhv8I2oHbAkUVLGbOaP0Urv2bIg8v71oyw2As5mZGrWyD8Y/s1600/funny-cat-pictures-009-004.jpg", weight: 64 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDQkLs6G-2ZalWsXKto0X7KQpv0gQOX28LHScLO1_T7Q8jSme2K-uPQHqoP-pikNtWkRoJfUux29xRtqOWfo1Ht9N869Ct9sd_tXxQREv8VDgGXOXsGyhPLaUNkiVGbZsE_StC2qFq9WE/s1600/funny-cat-pictures-009-006.jpg", weight: 53 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfxspAIgYv-fzR25axU63ddsNUGPG4iFP5oOF5jf6r-9MHztfixJRCQQFYG2jxBYMG69tU4WqHYYdNxcXG5SBUlPLdkLzh1ZKA9vgzbEgQMB3LCANFCtGsp0flysUjvIC1YubAWxff99U/s640/funny-cat-pictures-009-007.jpg", weight: 58 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHQbxPAXexL0dVeVjDuV4V4Adr4yrXxchIwxf96MVIqGSXzRHV_PPsMYYgbgmHhY5pjzmEWv00nRwEu-6YyO33H2Aj9FkJjMXIUUZG2O1A478FH2SKc0FjPUaPztb_RdxqQn7pJl3EcZI/s1600/funny-cat-pictures-009-008.jpg", weight: 83 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip9P9BBOwPKYeBR_tTX3NmIZInEEZ4pLFYw9c83fgS9gYT31TnEr_QdcQZ_CNWEdNtHnuTdByMepGSZ21E2bcYXSIrDNYlmW24IkpUlhzVsOGL_J2R6WAW3Th-034eaPFRYPi0hYoLgW0/s640/funny-cat-pictures-009-009.jpg", weight: 68 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwKCbIUy-b4QQU6EcRG8P-kjs3NJ-j5vT3n9NW-h4lBZJahA7PEryvIa0oekQusGxXk7wgUnz34xHOmKNvCObdTmTORBB9mBsE-kUPDoHIpKLnFXVwXw8mnWRhV9_3Fzxc89kapzazQ5k/s1600/funny-cat-pictures-009-011.jpg", weight: 73 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4DyoVOhgTclBSiic9x-ko62Hzd9Yjg_FkNVLY0VwrFLp1ur5afdEVXAF7eUxuah1lNaP-P-vTvvaKz5DWAnxlTD13BBYhezHtq3NOpG5UXp0sGw4jehAT1BibSqPCULJYl5S9UZVpbNo/s1600/funny-cat-pictures-009-012.jpg", weight: 65 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWrjtsv2SfPWvB9AqCx1l_oK4Zg97VX-h9o5CUvRrT2vHDnxoH5j-p7n_rsTLA79qRSW43iPt-_MIotcQcU9HSP3B4U8idMrwRgID7Sfc9kj_9ZPb0qa-PJfA8_drxbTxIW0Et85ljSPg/s640/funny-cat-pictures-009-015.jpg", weight: 58 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUACDeiOllHNg50V5vzA2iPmD3_GxR_Z1vRFRFofUonxOvwKTQeCF3BYu-Qc3Csy8RTEWrtM-gQ16yo1F5ygZBXxiMGHc-BqEtv-5a4vbVGT3D3Cu3Mo_0cW__dxMFWEMrCRdbSehJ4Ts/s640/funny-cat-pictures-009-017.jpg", weight: 66 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguqna0BFKBZhaqAY6eoXdFo9RZAeUNCbC5k0jMkE3AvPmwkr86W87PT1iThvC43N9sD0FEzTMNLQHBYJVk1FCjanTNfoKA2T5jddLwds6Raf2GGipGJ-sj7q4n4fGwKoLB3oCJ_YE_n9U/s640/funny-cat-pictures-009-016.jpg", weight: 75 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ2Xd0UwjjyVJSmzUQfUeSZ_IVOX3FAr5bgikUnTIF980zT6QaPMWtziTh-CGRCuwPhUkphi3dNXwI0e4YlsFQZSw0lp55BPo1xNK49i3-50tt2RAQ-RhDl9GTNcugL0exeGyarmd6YPE/s1600/funny-cat-pictures-009-018.jpg", weight: 66 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-l5QxpeuOXu_PFDJuGKfAWngB4Fi7BCqDu4-3Go-EJuu2OZCBRprqO9ue09H1vCY-skE-SRWC_uy6b-P1aK_3lfjHz6sAAc9EVS2xtIeHNLPJ-rXSEkSm0rz7UOjKa_YE-ltm7fueQzo/s1600/funny-cat-pictures-009-020.jpg", weight: 73 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgutauM8SSGEGL-g9Wz226E6H3xwRehAbxjyktXT8xeuC9NkkDMIHVdscsLKJaF6y1rzcogK_UXyUMvM6qpFHaD6YyavhlkOsa732Pq1pSwoOVusQCoHlgPnJA4in68XwVrM5Eyy-TF4mg/s640/funny-cat-pictures-009-021.jpg", weight: 78 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyk45WRKzPPtEhiuvJaqoQ2LbIdSPXCVCQ2LXNNa7mFOx8CLJgeon7erVJpcGPzPPsd0d8GWEUMCClEu7TINhWwHuAeD_4xqSeINQ_9onGiSneW30RvWDcQIVC9lfxVz0blm1KsVVEXUM/s1600/funny-cat-pictures-009-025.jpg", weight: 63 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha-QK5cXt9gFIrQzf5TAPKFmn1_YPSKB8nq0tbO5orURBdZUKUvp4OfqDnE_ihBXcgzcJoOESzvyEIjVWsaufxPISWHH_Buu2AbcGdZuxD_z82OfcrBjil03NffoeT19OdAN1IClWGR5U/s1600/funny-cat-pictures-009-027.jpg", weight: 60 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiECcjVl4O120PKZ88u1bcLwzXZ_sfFAeWgM_tdWkNI2r32rZNaSyy51yxjT-5c3LDWHCbD3AYiaHgvb0qpFNhSkGE_HWJ7jbKiUJjtrgx660N-N2hhl8cK2zp9RY32QjKXyJSY6nQ7XN0/s640/funny-cat-pictures-009-029.jpg", weight: 75 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig_t3liLg07Wpi51mBczAcp1wpdkuEFMn5vGpvc70ZzRqmL6_9zSLB4bxbkU8Q3pYynfSyAvp_d-4iqWXL5Wa3-A1uIWciv_Ld6BcEC4XL8SoI9SlBpD1RPm8naHxEzfrgzDBRdPcQsF8/s1600/funny-cat-pictures-009-040.jpg", weight: 85 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsR5srR28Lz4mn9KKJF3K3I2aXvwouxWyCZKop59-n-rR5hVVmGzqAXuniWz5bYiKO-QvSKDkm2VT_FvjFjIbi3Cltz2NWZ-9w5Nh0ikY_T58OO4Ymb47azHiTh5C2N_1sNaalHwopb1w/s1600/funny-cat-pictures-009-041.jpg", weight: 75 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbkQj3r8sNhJrGMigF10qBxIQXLXc3dCJze8VVz3NrIaOcmQwg6LeMwNnIdMVbYcw6ojfTOAxfgO1ILOh4AGw1vaarxJG9ZXMAZmzB1ImAx3_cRNM0fmaApcQ-DIWjENVKCYewLtLe2uA/s1600/funny-cat-pictures-009-042.jpg", weight: 63 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMRlX_djI1iNFG0VJJcxv_UFHV3oiNj3-OPUKCnJ3_oaFrsGfdzWk4oJIsGAoG3xVYxV2XlzP8uvh6xagjPKraODXT-HGUlTn_MaRBnkTQz1sz2WZmwyfluqt7jQmrNc1xsZZz-KbK87E/s640/funny-cat-pictures-009-046.jpg", weight: 65 },
        { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDqpYd_1RtnnuqJbqRSu7yCGbL_IuuhEi9J_Mn7qspumDejJOwjQhZ-CXQoBQiKIxddReRtQax40HB1A4Y4wOK_URIppMRtu_PoUOLuYGUbQEdyju8VMKfT0ZKXZnvHLk-HCLkZxAPMNc/s1600/funny-cat-pictures-009-049.jpg", weight: 78 },
        { url: "https://wallpapers.com/images/high/funny-cat-memes-pictures-q0t5fezyz0yo65wb.webp", weight: 72 },
        { url: "https://wallpapers.com/images/high/funny-cat-memes-pictures-yj0ymvvtw4dlvqrb.webp", weight: 71 },
        { url: "https://wallpapers.com/images/high/cute-funny-cat-pictures-dgdslz37nqeye01l.webp", weight: 74 },
        { url: "https://i.pinimg.com/736x/0e/72/61/0e7261f2fa1a52523d94b3e5a336c0aa.jpg", weight: 5 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe4%2F83%2F29%2Fe4832963257aff8de1522a02e8549f12.jpg&f=1&nofb=1&ipt=1f78bcc2f226639f5a084234b7e7eb154acc0ca6bf4d73da4f34b04ef91df937", weight: 65 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff7%2F57%2F09%2Ff757091038f7a0ed260dcfdc825d41cc.jpg&f=1&nofb=1&ipt=96e3004e35782873831a70aec900af001f4694cddbf764f5e4e99d00afe241b0", weight: 79 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Ff3%2F91%2Ffc%2Ff391fc897a8ce55eb1276c9b760b6e1d.jpg&f=1&nofb=1&ipt=e8a603d72849c73a9b8b8582b70e82f68b25b20dd8c2a31a5632333999050f78", weight: 74 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.kxexAOYw9PVBa4GU8w1hYwHaHY%3Fpid%3DApi&f=1&ipt=fe8e82cb74790062b2370a66ceeff3904ce526f7d2223fddde46eda0e78016e8&ipo=images", weight: 68 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.sk9qW0R7iBvPNUceIJ7MTQAAAA%3Fpid%3DApi&f=1&ipt=b050b2e8790a833c7416b88481ae6ba0a2255b5d405889f5b7fe0494e8d240ed&ipo=images", weight: 64 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.UYVoSU2H1kFIWtg4B2DRNQHaFj%3Fpid%3DApi&f=1&ipt=2adc507f2060a4f271e96f384b196ec5fac704266f464818fad9b9a5f5b83267&ipo=images", weight: 68 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.Z9u3Qy0_U-k-Z_Q9mfCg1QAAAA%3Fpid%3DApi&f=1&ipt=7a2aba84df01abf25adbd927ce696f433f9a7818001045f65a66a9f933e8d5ea&ipo=images", weight: 65 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.3Mlg6pTv8zJ4uXdXCZxRowHaHu%3Fpid%3DApi&f=1&ipt=391aa6dd7bd0a27e174f256ce33c97917a32e8a969381d1c7d82561199dc15f6&ipo=images", weight: 50 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.paVZ29NGYhxLtUCZ3FaclAHaJj%3Fpid%3DApi&f=1&ipt=d9355b4f4aa4b4a7adf2efd7ff48e2a86a3a3266a985ab3057bb57c7293a69ed&ipo=images", weight: 62 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%2Fid%2FOIP.-K1kdWVBEeDSYSjrqavGLAHaGU%3Fpid%3DApi&f=1&ipt=0bece8cbc9c8b342964c52e3dc908cefa9d8a22a4defcc2f60a6634cbdeb6fde&ipo=images", weight: 58 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2Fe7%2F8e%2F93e78ec6a25161d42ffc179db0cf7bca.jpg&f=1&nofb=1&ipt=a8383239766d88161f588ac2fe88d1100e7c12677251a464413df50125670a68", weight: 66.79/*👍*/ },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.2VmLzvLXUwbw-HuwStFDvgAAAA%3Fpid%3DApi&f=1&ipt=4ce0b136f384e6039407fb0556b6113d42c7fcdd6878a31898458f50979aacdf&ipo=images", weight: 48 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.NUGnBAf-T-cH9ZzNX_rC1AHaHa%3Fpid%3DApi&f=1&ipt=64abb18b4e7fd16db390e52960b3e712b3c452b848d6078ee94b05119723ac7d&ipo=images", weight: 46 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ahYPB6tV4If_q8Xo7p_WjAHaHa%3Fpid%3DApi&f=1&ipt=e713eae5a119f0ad4df1b33583dadcd9319a9b81ed86239972ffa9ddc7a3f524&ipo=images", weight: 61 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F70%2F5f%2F93%2F705f93fe08fc12e0da5f79e28073490f.jpg&f=1&nofb=1&ipt=48fc245adc20b0e4311560d56bc1802072ca71de2104331560b66d06597d589d", weight: 53 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-r3vP7LhQfw%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=64a753d4c3bd35254b1d8220519bc5ccee8b73ce6447f832af403cb9f91d69ce", weight: 52 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F67%2F2a%2Ffc%2F672afc9bfbf27ed7b6d9cf39badf030b.jpg&f=1&nofb=1&ipt=cdac821b3b03ea521f25709354b2b796e6c67285bad70b5274e6c7c76033caea", weight: 62 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestlifeonline.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2018%2F06%2Fcat-meme-94.jpg%3Fquality%3D82%26strip%3Dall&f=1&nofb=1&ipt=99111a5f3290e65565399df687681722979ef5469311e4dba10387d1372e77e2", weight: 49 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb9%2F46%2F4c%2Fb9464c2956d880b5a1d4168c254541b3--life-advice-crazy-eyes.jpg&f=1&nofb=1&ipt=8c5d195eb4867c03162b740e1ee7a0539ad552e67950aeb0cc073dcbcade3108", weight: 52 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-8sZkKWu98rE%2FUiD3w_ilIuI%2FAAAAAAAAAUc%2Fywb03PKeRtA%2Fs1600%2Fcat-funny.jpg&f=1&nofb=1&ipt=387304fcd61a8cb7b302aa30260dbb97af1e455f7a245d74b212cb2e66c1a0e3", weight: 73 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestlifeonline.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2018%2F06%2Fcat-meme-78.jpg%3Fresize%3D260&f=1&nofb=1&ipt=455a0122583a5d5afe8ac87700a3c33f975af532b7c7e52a08247f6fc94988fb", weight: 46 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2F3b%2Ff0%2F003bf01bd170cb73302bfd16c804ee81.jpg&f=1&nofb=1&ipt=82cd5c33764527f3b7d9a86c428c275d3b4e270d1b5c7f399e345f1ed52d83bd", weight: 51 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D257254005590326%26get_thumbnail%3D1&f=1&nofb=1&ipt=da164694a48bf5f5538710a888c00d52a4b48d06f7b675652e1287eba1b02e1e", weight: 24.457458358 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F07%2Ffunny-cat-pics-and-memes-18-64a814a742582__700.jpg&f=1&nofb=1&ipt=12108d43a09a20ac9d08be675269f0ebc9503b9fceba2693741766d3ff592aa2", weight: 37 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F79%2Fa3%2F16%2F79a3168cf52edca304ff32db46e0f888.jpg&f=1&nofb=1&ipt=c9d6bf5cd70662b84b49c5b93c3580df90aafdfb0d951b04e12e0d6feb9ecf3e", weight: 46 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F22%2F21%2Fb6%2F2221b61a1589a476f40ba753b422b991.jpg&f=1&nofb=1&ipt=f22bd4e1b55585e18011510880c80817128a9277dd1464c03d50d1af1921643f", weight: 47 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F81%2Fea%2Fe8%2F81eae89270a21bdd32e2b474b7ef18d7.png&f=1&nofb=1&ipt=742b21c240c06c7cc7f92e456e86452ef916e0a44ee3971eb98fdc3a1c5407a5", weight: 58 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dreamsquote.com%2Fwp-content%2Fuploads%2F2024%2F02%2Fcat-memes-funny.jpg&f=1&nofb=1&ipt=c7b2d728bb6d188f8ff3332091aaf15f16a77ca5e25e7c9e2cc8eeb0ffdb6d9e", weight: 54 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8c%2F28%2F48%2F8c284875b1ac5e5663a9a98774a894c9.jpg&f=1&nofb=1&ipt=7b7077778561d77cdbededc361d8a001c2821bb713826e6dec1486fae3d2f3fd", weight: 39 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4b%2F16%2F83%2F4b1683db9806d6e4d853a3f350b6b273.jpg&f=1&nofb=1&ipt=56bc146af57729d9d7f3be3d36862aa53bc978645f7573d50d3004f7e39375b3", weight: 65 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8a%2Faf%2F74%2F8aaf740f6c533deb84382834635ac9ec.jpg&f=1&nofb=1&ipt=a2aaa20f82590028b909fce4fb5aff089b105c07385a5c8780a392265cf538c8", weight: 63 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstyles.redditmedia.com%2Ft5_5x81u7%2Fstyles%2FcommunityIcon_t8en21sthsja1.jpg%3Fformat%3Dpjpg%26s%3D11f073ad0645f9e6498676fe364e648bcd23e123&f=1&nofb=1&ipt=7377b6946eecff1cda2bb14395ee5bbdef6591d24d1d7037bb440fb22a93362f", weight: 41 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff1%2F3a%2F32%2Ff13a3230c3f7b023f06fa66413bfb259.jpg&f=1&nofb=1&ipt=5717bce1ad365d411e672751c676a32b3c038157cf1fff3046a0dad7db86f24a", weight: 42 }
    ];

    const topNav = document.createElement('nav');
    topNav.className = 'top-nav';
    topNav.innerHTML = '<button id="collection-btn" class="collection-btn">Collection</button>';
    document.body.insertBefore(topNav, document.body.firstChild);

    const collectionModal = document.createElement('div');
    collectionModal.id = 'collection-modal';
    collectionModal.className = 'collection-modal hidden';
    collectionModal.innerHTML = `
        <div class="collection-header">
            <h2>Collectables</h2>
            <span class="close-btn">&times;</span>
        </div>
        <div class="collection-grid"></div>
    `;
    document.body.appendChild(collectionModal);

    const fullscreenModal = document.createElement('div');
    fullscreenModal.id = 'fullscreen-modal';
    fullscreenModal.className = 'fullscreen-modal hidden';
    fullscreenModal.innerHTML = `
        <div class="modal-content">
            <img src="" alt="Full screen collectable" class="fullscreen-img">
        </div>
    `;
    document.body.appendChild(fullscreenModal);

    const imageContainerEl = document.querySelector(".img-container");
    const btnEl = document.querySelector(".btn");
    const collectionBtn = document.getElementById('collection-btn');
    const closeBtn = document.querySelector('.close-btn');
    const collectionGrid = document.querySelector('.collection-grid');
    const fullscreenImg = document.querySelector('#fullscreen-modal .fullscreen-img');
    const modalContent = document.querySelector('#fullscreen-modal .modal-content');

    if (!imageContainerEl) {
        console.error('Error: .img-container element not found');
        return;
    }

    if (!btnEl) {
        console.error('Eror: .btn element not found');
        return;
    }

    const buttonText = btnEl.querySelector("b");
    if (buttonText) buttonText.textContent = "Load cars";

    function normalizeUrl(url) {
        try {
            if (url.includes('duckduckgo.com/iu/')) {
                const params = new URLSearchParams(url.split('?')[1]);
                const originalUrl = params.get('u');
                if (originalUrl) {
                    return normalizeUrl(decodeURIComponent(originalUrl));
                }
            }

            const urlObj = new URL(url);
            return `${urlObj.origin}${urlObj.pathname}`;
        } catch (e) {
            return url.split('?')[0].split('#')[0];
        }
    }

    function initCollection() {
        let collection = localStorage.getItem('creatureCollection');
        if (!collection) {
            const initialCollection = catImages.map(cat => ({
                url: cat.url,
                collected: false
            }));
            localStorage.setItem('creatureCollection', JSON.stringify(initialCollection));
            return initialCollection;
        }

        try {
            const parsedCollection = JSON.parse(collection);

            if (Array.isArray(parsedCollection) && parsedCollection.length > 0) {
                if ('count' in parsedCollection[0]) {
                    console.log('Migrating old collection data format');
                    const migratedCollection = parsedCollection.map(cat => ({
                        url: cat.url,
                        collected: cat.collected || cat.count > 0
                    }));
                    localStorage.setItem('creatureCollection', JSON.stringify(migratedCollection));
                    return migratedCollection;
                }

                const validatedCollection = parsedCollection.map(cat => ({
                    url: cat.url,
                    collected: cat.collected === undefined ? false : cat.collected
                }));

                if (validatedCollection.length !== catImages.length) {
                    console.log('Syncing collection with current tall-grass midnight creature stalker images');
                    const newCollection = catImages.map(cat => {
                        const existing = validatedCollection.find(c => 
                            normalizeUrl(c.url) === normalizeUrl(cat.url)
                        );
                        return {
                            url: cat.url,
                            collected: existing ? existing.collected : false
                        };
                    });
                    localStorage.setItem('creatureCollection', JSON.stringify(newCollection));
                    return newCollection;
                }

                return validatedCollection;
            }
        } catch (e) {
            console.error('Error parsing collection from localStorage', e);
        }

        console.log('Resetting collection due to data issues or something 👍');
        const freshCollection = catImages.map(cat => ({
            url: cat.url,
            collected: false
        }));
        localStorage.setItem('catCollection', JSON.stringify(freshCollection));
        return freshCollection;
    }

    function updateCollection(generatedCats) {
        const collection = initCollection();
        let updated = false;
        const newCollectables = [];

        generatedCats.forEach(newCat => {
            const normalizedNewCatUrl = normalizeUrl(newCat.url);

            const catIndex = collection.findIndex(cat => 
                normalizeUrl(cat.url) === normalizedNewCatUrl
            );

            if (catIndex !== -1 && !collection[catIndex].collected) {
                collection[catIndex].collected = true;
                updated = true;
                newCollectables.push(newCat);
                console.log(`New collectable unlocked: ${collection[catIndex].url}`);
            }
        });

        if (updated) {
            localStorage.setItem('creatureCollection', JSON.stringify(collection));
        }

        renderCollection();

        return newCollectables;
    }

    function renderCollection() {
        const collection = initCollection();
        collectionGrid.innerHTML = '';

        console.log(`Rendering ${collection.length} collectables (should be ${catImages.length})`);

        collection.forEach((cat, index) => {
            try {
                const catItem = document.createElement('div');
                catItem.className = `cat-item ${cat.collected ? 'collected' : 'uncollected'}`;
                catItem.setAttribute('data-index', index);
                catItem.setAttribute('data-url', cat.url);
                catItem.setAttribute('data-collected', cat.collected);

                catItem.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    return false;
                });

                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = "Cat collectable";
                img.className = "collection-img";

                img.addEventListener('dragstart', (e) => {
                    e.preventDefault();
                    return false;
                });

                img.onerror = function() {
                    console.error(`Failed to load image: ${cat.url}`);

                    this.style.display = 'none';

                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'image-error';
                    errorDiv.textContent = cat.collected ? 'COLLECTED' : '???';
                    errorDiv.style.color = 'white';
                    errorDiv.style.fontSize = '14px';
                    errorDiv.style.display = 'flex';
                    errorDiv.style.alignItems = 'center';
                    errorDiv.style.justifyContent = 'center';
                    errorDiv.style.height = '100%';
                    errorDiv.style.backgroundColor = '#333';

                    catItem.appendChild(errorDiv);
                };

                catItem.appendChild(img);
                collectionGrid.appendChild(catItem);
            } catch (e) {
                console.error(`Error rendering cat at index ${index}:`, e);
            }
        });
    }

    collectionGrid.addEventListener('click', (e) => {
        const catItem = e.target.closest('.cat-item');
        if (!catItem) return;

        const isCollected = catItem.getAttribute('data-collected') === 'true';

        if (!isCollected) return;

        const imgUrl = catItem.getAttribute('data-url');

        fullscreenImg.src = imgUrl;

        fullscreenModal.classList.remove('hidden');

        void fullscreenModal.offsetWidth;
        fullscreenModal.classList.add('fade-in');
    });

    fullscreenModal.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    modalContent.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    fullscreenImg.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    fullscreenImg.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    fullscreenModal.addEventListener('click', (e) => {
        if (e.target === fullscreenModal || e.target === modalContent) {
            fullscreenModal.classList.remove('fade-in');

            setTimeout(() => {
                fullscreenModal.classList.add('hidden');
            }, 300);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !fullscreenModal.classList.contains('hidden')) {
            fullscreenModal.classList.remove('fade-in');

            setTimeout(() => {
                fullscreenModal.classList.add('hidden');
            }, 300);
        }
    });

    collectionBtn.addEventListener('click', () => {
        collectionModal.classList.remove('hidden');
        renderCollection();
    });

    closeBtn.addEventListener('click', () => {
        collectionModal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === collectionModal) {
            collectionModal.classList.add('hidden');
        }
    });

    loadRandomCats();

    btnEl.addEventListener("click", () => {
        loadRandomCats();
    });

function loadRandomCats() {
    const scrollPosition = window.scrollY;

    imageContainerEl.innerHTML = "";

    void imageContainerEl.offsetHeight;

    let generatedCats = [];
    let availableImages = [...catImages];

    for (let i = 0; i < 3 && availableImages.length > 0; i++) {
        const selectedImage = getRandomCatImage(availableImages);
        generatedCats.push(selectedImage);

        const percentageValue = selectedImage.weight;

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "image-wrapper";

        const rarityText = document.createElement("div");
        rarityText.className = "rarity-text";

        if (percentageValue < 10) {
            rarityText.classList.add("golden-rarity");
        } else if (percentageValue < 50) {
            rarityText.classList.add("copper-rarity");
        }

        rarityText.textContent = percentageValue.toFixed(2) + "% rarity";

        const newImgEl = document.createElement("img");
        newImgEl.src = selectedImage.url;
        newImgEl.alt = "Random creature who thy stalks from the tall grass image at the dawn of midnight.";
        newImgEl.loading = "lazy";

        newImgEl.onerror = function() {
            console.error(`Failed to load goober cat image: ${selectedImage.url}`);
            this.style.backgroundColor = '#333';
            this.style.opacity = '0.5';
        };

        setTimeout(() => {
            imageWrapper.classList.add("fade-in");
        }, 10);

        imageWrapper.appendChild(rarityText);
        imageWrapper.appendChild(newImgEl);
        imageContainerEl.appendChild(imageWrapper);

        availableImages = availableImages.filter(img => 
            normalizeUrl(img.url) !== normalizeUrl(selectedImage.url)
        );
    }

    requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);

        setTimeout(() => {
            window.scrollTo(0, scrollPosition);

            const newCollectables = updateCollection(generatedCats);

            if (newCollectables.length > 0) {
                setTimeout(() => {
                    const imageWrappers = document.querySelectorAll('.image-wrapper');
                    imageWrappers.forEach(wrapper => {
                        const img = wrapper.querySelector('img');
                        if (img) {
                            const imgSrc = img.src;
                            if (newCollectables.some(cat => 
                                normalizeUrl(cat.url) === normalizeUrl(imgSrc))) {

                                if (!wrapper.querySelector('.new-label')) {
                                    const newLabel = document.createElement('div');
                                    newLabel.className = 'new-label';
                                    newLabel.textContent = 'NEW';
                                    wrapper.appendChild(newLabel);
                                }
                            }
                        }
                    });
                }, 50);
            }
        }, 50);
    });
}

    function getRandomCatImage(images) {
        const totalWeight = images.reduce((sum, item) => sum + item.weight, 0);
        let random = Math.random() * totalWeight;

        for (const image of images) {
            if (random < image.weight) {
                return image;
            }
            random -= image.weight;
        }

        return images[0];
    }
});
