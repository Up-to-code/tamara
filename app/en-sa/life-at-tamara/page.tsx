import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-life-at-tamara-header.html';
import body from '@/components/exact/en-sa-life-at-tamara-body.html';
import footer from '@/components/exact/en-sa-life-at-tamara-footer.html';
import inline from '@/components/exact/en-sa-life-at-tamara.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
