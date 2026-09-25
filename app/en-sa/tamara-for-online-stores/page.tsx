import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-tamara-for-online-stores-header.html';
import body from '@/components/exact/en-sa-tamara-for-online-stores-body.html';
import footer from '@/components/exact/en-sa-tamara-for-online-stores-footer.html';
import inline from '@/components/exact/en-sa-tamara-for-online-stores.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
