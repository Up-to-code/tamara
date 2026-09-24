import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-tamara-ads-header.html';
import body from '@/components/exact/en-sa-tamara-ads-body.html';
import footer from '@/components/exact/en-sa-tamara-ads-footer.html';
import inline from '@/components/exact/en-sa-tamara-ads.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
