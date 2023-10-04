import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@/test-utils/customRender";
import Prefs from "../index";
import { ErrorBoundary } from "@/test-utils/ErrorBoundary";

const WrapperPrefs = () => {
  return (
    <ErrorBoundary>
      <Prefs />
    </ErrorBoundary>
  );
};

const prefs = [
  {
    prefCode: 1,
    prefName: "北海道",
  },
  {
    prefCode: 2,
    prefName: "青森県",
  },
  {
    prefCode: 3,
    prefName: "岩手県",
  },
  {
    prefCode: 4,
    prefName: "宮城県",
  },
  {
    prefCode: 5,
    prefName: "秋田県",
  },
  {
    prefCode: 6,
    prefName: "山形県",
  },
  {
    prefCode: 7,
    prefName: "福島県",
  },
  {
    prefCode: 8,
    prefName: "茨城県",
  },
  {
    prefCode: 9,
    prefName: "栃木県",
  },
  {
    prefCode: 10,
    prefName: "群馬県",
  },
  {
    prefCode: 11,
    prefName: "埼玉県",
  },
  {
    prefCode: 12,
    prefName: "千葉県",
  },
  {
    prefCode: 13,
    prefName: "東京都",
  },
  {
    prefCode: 14,
    prefName: "神奈川県",
  },
  {
    prefCode: 15,
    prefName: "新潟県",
  },
  {
    prefCode: 16,
    prefName: "富山県",
  },
  {
    prefCode: 17,
    prefName: "石川県",
  },
  {
    prefCode: 18,
    prefName: "福井県",
  },
  {
    prefCode: 19,
    prefName: "山梨県",
  },
  {
    prefCode: 20,
    prefName: "長野県",
  },
  {
    prefCode: 21,
    prefName: "岐阜県",
  },
  {
    prefCode: 22,
    prefName: "静岡県",
  },
  {
    prefCode: 23,
    prefName: "愛知県",
  },
  {
    prefCode: 24,
    prefName: "三重県",
  },
  {
    prefCode: 25,
    prefName: "滋賀県",
  },
  {
    prefCode: 26,
    prefName: "京都府",
  },
  {
    prefCode: 27,
    prefName: "大阪府",
  },
  {
    prefCode: 28,
    prefName: "兵庫県",
  },
  {
    prefCode: 29,
    prefName: "奈良県",
  },
  {
    prefCode: 30,
    prefName: "和歌山県",
  },
  {
    prefCode: 31,
    prefName: "鳥取県",
  },
  {
    prefCode: 32,
    prefName: "島根県",
  },
  {
    prefCode: 33,
    prefName: "岡山県",
  },
  {
    prefCode: 34,
    prefName: "広島県",
  },
  {
    prefCode: 35,
    prefName: "山口県",
  },
  {
    prefCode: 36,
    prefName: "徳島県",
  },
  {
    prefCode: 37,
    prefName: "香川県",
  },
  {
    prefCode: 38,
    prefName: "愛媛県",
  },
  {
    prefCode: 39,
    prefName: "高知県",
  },
  {
    prefCode: 40,
    prefName: "福岡県",
  },
  {
    prefCode: 41,
    prefName: "佐賀県",
  },
  {
    prefCode: 42,
    prefName: "長崎県",
  },
  {
    prefCode: 43,
    prefName: "熊本県",
  },
  {
    prefCode: 44,
    prefName: "大分県",
  },
  {
    prefCode: 45,
    prefName: "宮崎県",
  },
  {
    prefCode: 46,
    prefName: "鹿児島県",
  },
  {
    prefCode: 47,
    prefName: "沖縄県",
  },
];

const noDataPrefssMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => ({ data: { prefs: [] } }),
    });
  });

const dataPrefsMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => ({ data: { prefs } }),
    });
  });

const statusErrorPrefsMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: false,
      status: 400,
      json: async () => ({ data: { prefs } }),
    });
  });

describe("Prefs and Pref", () => {
  afterAll(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  test("render a loading text, 都道府県を取得中です ", async () => {
    global.fetch = jest.fn().mockImplementation(dataPrefsMock);
    const { asFragment } = render({ ui: <WrapperPrefs /> });
    screen.queryByText("都道府県を取得中です");
    expect(asFragment()).toMatchSnapshot();
    // テキストが消えるまで待つ
    await waitForElementToBeRemoved(() =>
      screen.queryByText("都道府県を取得中です"),
    );
  });
  test("render: prefs, 都道府県を取得中です ", async () => {
    global.fetch = jest.fn().mockImplementation(dataPrefsMock);
    const { asFragment } = render({ ui: <WrapperPrefs /> });
    screen.queryByText("都道府県を取得中です");
    // 以下が上記と逆　→　都道府県が取得できてれば成功
    await waitForElementToBeRemoved(() =>
      screen.queryByText("都道府県を取得中です"),
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("render: no prefs, 都道府県が見つかりませんでした ", async () => {
    global.fetch = jest.fn().mockImplementation(noDataPrefssMock);
    const { asFragment } = render({ ui: <WrapperPrefs /> });
    await screen.findByText("都道府県が見つかりませんでした");
    expect(asFragment()).toMatchSnapshot();
  });

  test("error", async () => {
    global.fetch = jest.fn().mockImplementation(statusErrorPrefsMock);
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => void 0);
    render({ ui: <WrapperPrefs /> });
    await screen.findByText("不具合が発生しました!! status: 400");
    spy.mockRestore();
  });

});
