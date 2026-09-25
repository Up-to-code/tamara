import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-decathlon-header.html';
import body from '@/components/exact/en-sa-stores-decathlon-body.html';
import footer from '@/components/exact/en-sa-stores-decathlon-footer.html';
import inline from '@/components/exact/en-sa-stores-decathlon.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
