document.addEventListener("DOMContentLoaded", () => {
  const prizes = [
    { "category": "パーツ品", "name": "無限マフラー", "images": ["img/マフラー1.jpg","img/マフラー2.jpg"]},
    { "category": "飲食物", "name": "ウイスキー 知多", "image": "img/知多.jpg"},
    { "category": "飲食物", "name": "日本酒 二兎", "image": "img/二兎.jpg"},
    { "category": "洗車グッズ", "name": "KeePer ラ･モップ", "image": "img/ラ･モップ.jpg"},
    { "category": "洗車グッズ", "name": "BLASK Graphene Water", "image": "img/BLASK Graphene Water.jpg"},
    { "category": "パーツ品", "name": "Carmate フレグランス", "image": "img/Carmate フレグランス.jpg"},
    { "category": "洗車グッズ", "name": "DETAIL ARTIST HYDRO", "image": "img/DETAIL ARTIST HYDRO.jpg"},
    { "category": "洗車グッズ", "name": "DETAIL ARTIST カーシャンプー･コーティング剤", "image": "img/DETAIL ARTIST カーシャンプー･コーティング剤.jpg"},
    { "category": "パーツ品", "name": "HONDA エンブレム マットブラック", "image": "img/HONDA エンブレム マットブラック.jpg"},
    { "category": "洗車グッズ", "name": "RHET カーボンナノチューブコーティング", "image": "img/RHET カーボンナノチューブコーティング.jpg"},
    { "category": "パーツ品", "name": "TEIN エンブレム", "image": "img/TEIN エンブレム.jpg"},
    { "category": "ミニカー", "name": "1/64スケール VEZEL ミニカー", "image": "img/VEZEL ミニカー.jpg"},
    { "category": "パーツ品", "name": "ウォッシャー液", "image": "img/ウォッシャー液.jpg"},
    { "category": "パーツ品", "name": "エアコンフィルター", "image": "img/エアコンフィルター.jpg"},
    { "category": "洗車グッズ", "name": "クロス", "image": "img/クロス.jpg"},
    { "category": "パーツ品", "name": "シフトノブパーカー", "image": "img/シフトノブパーカー.jpg"},
    { "category": "パーツ品", "name": "ズボラクリーナー", "image": "img/ズボラクリーナー.jpg"},
    { "category": "雑貨品", "name": "トートバッグ", "image": "img/トートバッグ.jpg"},
    { "category": "洗車グッズ", "name": "ぬぬファクトリー POML", "image": "img/ぬぬファクトリー POML.jpg"},
    { "category": "洗車グッズ", "name": "ホイールクリーナー", "image": "img/ホイールクリーナー.jpg"},
    { "category": "雑貨品", "name": "マフラータオル", "image": "img/マフラータオル.jpg"},
    { "category": "雑貨品", "name": "みそきん ぬいぐるみ", "image": "img/みそきん ぬいぐるみ.jpg"},
    { "category": "洗車グッズ", "name": "ラ･モップ", "image": "img/ラ･モップ.jpg"},
    { "category": "パーツ品", "name": "ルシオール ワイパーレスキット", "image": "img/ルシオール ワイパーレスキット.jpg"},
    { "category": "本", "name": "ワンソクチューブ 損しない車の買い方大全", "image": "img/ワンソクチューブ 損しない車の買い方大全.jpg"},
    { "category": "パーツ品", "name": "工具セット", "image": "img/工具セット.jpg"},
    { "category": "パーツ品", "name": "車用芳香剤", "image": "img/車用芳香剤.jpg"},
    { "category": "洗車グッズ", "name": "洗車スポンジ", "image": "img/洗車スポンジ.jpg"},
    { "category": "洗車グッズ", "name": "洗車ブラシ5本セット", "image": "img/洗車ブラシ5本セット.jpg"},
    { "category": "パーツ品", "name": "燃料添加剤", "image": "img/燃料添加剤.jpg"},
    { "category": "パーツ品", "name": "ABDS グリルシート", "image": "img/グリルシート.jpg"},
    { "category": "パーツ品", "name": "ABDS ボンネットノーズシート", "image": "img/ボンネットノーズシート.jpg"},
    { "category": "雑貨品", "name": "GARAGEVARY グッズ", "image": "img/GARAGEVARY グッズ.jpg"},
    { "category": "雑貨品", "name": "SecondStage グッズ", "image": "img/SecondStage グッズ.jpg"},
    { "category": "パーツ品", "name": "share Style LEDバックランプ", "image": "img/share Style LEDバックランプ.jpg"},
    { "category": "パーツ品", "name": "Share Style サイドステップガード", "image": "img/Share Style サイドステップガード.jpg"},
    { "category": "パーツ品", "name": "Share Style バニティランプ", "image": "img/Share Style バニティランプ.jpg"},
    { "category": "パーツ品", "name": "Share Style メッシュシェード", "image": "img/Share Style メッシュシェード.jpg"},
    { "category": "パーツ品", "name": "Share Style リフレクターランプ", "image": "img/Share Style リフレクターランプ.jpg"},
    { "category": "パーツ品", "name": "エンラージ商事 インナードアハンドル ステンレスブラック", "image": "img/エンラージ商事 ドアトリム.jpg"},
    { "category": "パーツ品", "name": "エンラージ商事 ルームランプパネル ダウンライトガーニッシュ", "image": "img/エンラージ商事.jpg"},
    { "category": "雑貨品", "name": "キーホルダー(ゴールドVer)", "image": "img/キーホルダー.jpg"},
    { "category": "飲食物", "name": "キッチンカーお食事券", "image": "img/キッチンカーお食事券.jpg"},
    { "category": "雑貨品", "name": "井の蔵レザー キーウェアジャケット･ホテルキーホルダー", "image": "img/伊の蔵レザー.jpg"},
  ];

  const gallery = document.getElementById("gallery");
  const categorySelect = document.getElementById("categorySelect");

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function buildImagesHtml(item) {
    if (Array.isArray(item.images) && item.images.length > 0) {
      return item.images.map(src =>
        `<img src="${escapeHtml(src)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none'">`
      ).join("");
    } else if (item.image) {
      return `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none'">`;
    } else {
      return `<div class="no-image">画像なし</div>`;
    }
  }

  function renderGallery(category = "all") {
    if (!gallery) {
      console.warn("ギャラリー要素が見つかりません（#gallery）");
      return;
    }
    gallery.innerHTML = "";

    const filtered = prizes.filter(p => category === "all" || p.category === category);

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      const imagesHtml = buildImagesHtml(p);

      card.innerHTML = `
        <div class="image-group">${imagesHtml}</div>
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.comment || "")}</p>
      `;
      gallery.appendChild(card);
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", e => renderGallery(e.target.value));
  }

  renderGallery("all");
});
