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
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff1%2F3a%2F32%2Ff13a3230c3f7b023f06fa66413bfb259.jpg&f=1&nofb=1&ipt=5717bce1ad365d411e672751c676a32b3c038157cf1fff3046a0dad7db86f24a", weight: 42 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F43%2F2f%2Fae%2F432fae64d1173d34f6c490c0544ee0ae.jpg&f=1&nofb=1&ipt=ac0d8877d9269f2d573238a23ee6a023a6138bbddf71e4f1b39ffe0893850d73", weight: 52 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8a%2F9a%2F51%2F8a9a51372de42b439f560bba68427d7f.jpg&f=1&nofb=1&ipt=a6ca1b07780446a7ad35b2e090d7665cb910a3522e2978bf981daca152601449", weight: 32 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd4%2Fc8%2F08%2Fd4c8089eeb6df31fd6f0ff30eee92ef7.jpg&f=1&nofb=1&ipt=d79d16515db648aa1c212edd48a4b25d26f41879185be3eb7457b94ac39b8ac3", weight: 22 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F96%2Feb%2Fb8%2F96ebb803d5cff1b035b31d141f6095a2.jpg&f=1&nofb=1&ipt=a640e5b4bf391b56e429d99afd0d850e62fcbd5eae6e0b5fd32002fbe70dba1f", weight: 44 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8d%2Fa2%2F9c%2F8da29c4e79e7deed568714e8c64a24fc.jpg&f=1&nofb=1&ipt=49dac357d02a92ee9db876ccf087f105a514fe51cd633ce704eeb984bb331c37", weight: 41 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9c%2F36%2F06%2F9c3606fcd8d2afefeb261b68a9929ac1.jpg&f=1&nofb=1&ipt=a0969c02ab0bd4199b25993fe57f557a19443984df61b6f4b856145e8ce99fcb", weight: 50 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9f%2F1b%2Fe4%2F9f1be4382325d36a1b32762807a4cab5.jpg&f=1&nofb=1&ipt=2406a08dc655a0fd3e46c2aef7b1713aad0a259a78f9dc348b92957c57a9537f", weight: 78 /*rizz*/ },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F71%2F99%2F5f%2F71995f6fc8af25c640df6af1e678b36c.jpg&f=1&nofb=1&ipt=8c40114e69f664881acbc6d187ec1adacb563f416edfdbd99cdc66a91b8ee6ad", weight: 47 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1c%2F84%2F82%2F1c8482409856ae99a4a076377b729962.jpg&f=1&nofb=1&ipt=ba67d2d38b6710b0fc717d085a9b28e65a7588b10b39d9f6c400c8dd760f3aaf", weight: 17 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F55%2F30%2F0b%2F55300bb63e36043e5cf633623eae8b5d.jpg&f=1&nofb=1&ipt=f8063c237d9b2baac4a2d0a4b062e44e2743e61738fa7e48e18a50abfc08a63a", weight: 43 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcc%2Ffe%2F45%2Fccfe456f45a79800ee2edb70e600c973.jpg&f=1&nofb=1&ipt=d38c60e6fde929192e3ca1cf822f5ab742eda58eab7733f7aa5ff68d676f82ce", weight: 9 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FVHGQ7ke_XjQAAAAM%2Fyuh-uh-yuh-uh-cat.gif&f=1&nofb=1&ipt=3ec806fc459f2679418ea2d2e37e23284dea37409d6a38fc42065572c52fe960", weight: 52 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4d%2Ff8%2F84%2F4df884f24ccb5038b2698d95da446247.jpg&f=1&nofb=1&ipt=426567b9f34223167560115e7eaed2a0ac5500569d299d8f5b9e7a44fde1fc92", weight: 39 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload-os-bbs.hoyolab.com%2Fupload%2F2023%2F06%2F23%2F316444310%2F8355a99445fa012375a9eedd6ed614d7_9067801740251487030.jpg&f=1&nofb=1&ipt=837cc8391043f2ce4a12edac402d89faa4329b534ddff0de42bd88c9a720fc15", weight: 3.14159 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F21%2F41%2F93214107f24a27913739a94459732ae8.jpg&f=1&nofb=1&ipt=597304b6bdef400055797e350ece25a8be5c5f73d7da40ab5de6771f15aef242", weight: 43 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F9b%2F5a%2Ff1%2F9b5af1686b4c2fa01bd7d904779e6a20.jpg&f=1&nofb=1&ipt=880d319f048454028550d7b41cf8014a148e0106c68c3979fa0ebe52a061c01a", weight: 34 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fuekciu41om511.jpg&f=1&nofb=1&ipt=cdc6b23f90006dde45eff59335f7fcee6628d6e5fcee95fc061f04599c34824f", weight: 52 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8b%2F32%2Fd8%2F8b32d8da3c0212cdb89ddde69edf0fac.jpg&f=1&nofb=1&ipt=b757cad02eff5bd8f7b0ff881cbc5a508706aaa9735232b2c3df4f5da849564e", weight: 27 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2F--QlYW8DJPIAAAAM%2Fgoober-cat.gif&f=1&nofb=1&ipt=549247255585f4d3125139967899104431639a4d8d7efef98ba4ac80f0affe4b", weight: 37 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe1%2Fbd%2F59%2Fe1bd59aca179d9d38daa2a9517b0e3d2.jpg&f=1&nofb=1&ipt=70bb25574e6942520fd0dacce0485a8c74eaa40ccdbf3fe5c466ed23040b1bfd", weight: 8 /*💣💥*/ },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F4a%2F1b%2F6d%2F4a1b6d1e8cde8ac23e94188f0584090c.jpg&f=1&nofb=1&ipt=0aac29531adab3e5e1531a8c6ff8c82130da253fa84bd148afc698a43a7828b2", weight: /*below*/ 10 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fec%2F00%2F33%2Fec0033cae250c9ba4c3206d50a6b2589.jpg&f=1&nofb=1&ipt=737e8c0c0b0fb6f958ab7f7cc9919dbe46da54f9289f8675e04831d9d97ed25d", weight: 12 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5a%2F82%2F33%2F5a8233ae4a9ff13f9d5402fab49c0246.jpg&f=1&nofb=1&ipt=a280f36a54db63362fd4f8dd6df058fa052253df001922f2fab60c69bc559596", weight: 20 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F002%2F747%2F307%2F0b0.png&f=1&nofb=1&ipt=0bdc5515ac236554aacde215496ee3bfe3dd6dae13843c0afa30c634a764fcfb", weight: 30 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F002%2F763%2F892%2Fc5a.jpg&f=1&nofb=1&ipt=69ebc1fb76516d45cb0c8dc183e77fe731b48e96f032e8e9d66c2277289b2e32", weight: 6 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffe%2Fe1%2F07%2Ffee107dc2233b86eac5d926831540f47.jpg&f=1&nofb=1&ipt=54b90739e84ff7f47d67a80062b232974a507545c87ef70174b8f1c1aa1305ab", weight: 19 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2F9ZUkx0LZCvoAAAAC%2Fcats-cat.gif&f=1&nofb=1&ipt=3608fe62cbc6ee378ad6b192279fc8e5dc5fd77889fa2d29957705c1ad175af5", weight: 27 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F75%2Fe5%2F10%2F75e510dc5fd98f97a390af2b395b907b.jpg&f=1&nofb=1&ipt=47092a9d7d46c8fad4df7e10b4de36685f072446a6ca5511475bd7d8f612d344", weight: 13 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2F07%2Fd3%2F1d07d33066a0d82621621c34194f59dc.jpg&f=1&nofb=1&ipt=89102021fa22eace01d5f9fe1d3c20112f5327eaf31eb09db5382909ac5cf80a", weight: 8 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3c%2F0a%2F1d%2F3c0a1d657aa12fa18b205f9dac125ec3.jpg&f=1&nofb=1&ipt=102ba7d997c3e821d19427bd67d6aff5eca888c30d0164dfa2e036511117e8b0", weight: /*it's a kittypet hahah*/ 39 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5c%2F72%2Fff%2F5c72ffbfca7bbb232a586ba773cc038c.jpg&f=1&nofb=1&ipt=f708ed197989611d3c1f0c72484ddb3757fdd2df221d721bca0a0b51432ae9c9", weight: 28 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F10%2Fe9%2F14%2F10e914ff9c8cf99e84ee522a5724b16a.jpg&f=1&nofb=1&ipt=9c76b5d02718bb3fa8f4ae1e5c577bdeb902d31407d2a33924858ea5573c0958", weight: 20 /*piece chicken nuggies*/ },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fba%2Fd9%2F88%2Fbad98876a2009d20e2c3ece35d293c7c.jpg&f=1&nofb=1&ipt=fe865eb9c2338f8034e16f1c47caddfead97ffa071d2da28074fbde048caa0c7", weight: 36 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F002%2F476%2F042%2F574.jpg&f=1&nofb=1&ipt=82447669f3f00105ccad592356785e39050d578946732025cc95a8826063f904", weight: 27 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F88%2F9d%2F16%2F889d1656fb628c504fccf9eb01ef0861.jpg&f=1&nofb=1&ipt=cb0515dc8e185bfabefcee7a699272c6cea6e6e8349e16fa25496e27db1314bf", weight: 74 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F72%2Fb4%2Fac%2F72b4acec30d1161ea809ee5adad417e9.jpg&f=1&nofb=1&ipt=70f5df6309574641672396b090df408c0f04ca756e3985213fe2514e55278856", weight: 64 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F70%2Fbc%2F65%2F70bc65f9f86f9d67e2ae9e4e0b1e4464.jpg&f=1&nofb=1&ipt=eabc400a8d5531e999278a2099cf3422dfa9d571235ad3459291e409e31fcc7f", weight: 58 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb7%2Ff5%2Fd7%2Fb7f5d7b8957d81107d209ffeeae12e00.jpg&f=1&nofb=1&ipt=169841cb2895e1bafb4a6af8cbc347a62c33660720c3e16594ce4dc88ec86511", weight: 51 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2F1F4j9MEsZe0AAAAM%2Fdumb-cat.gif&f=1&nofb=1&ipt=0a220f9236dadb529089e01b2b6e549edc4ef3b4eaec7d90e188a8973e9d76cf", weight: 26 },
        { url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcc%2F08%2Fc9%2Fcc08c99f53bb5003818925731adf5c31.jpg&f=1&nofb=1&ipt=36e9188d78dd0731e1e7c73f1833e82e3a7ac2480bbd2312fffa36bacaf41dc8", weight: 42 }
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
